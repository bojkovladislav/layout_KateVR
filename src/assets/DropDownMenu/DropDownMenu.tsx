import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material';
import i18n from 'i18next';
import { SimpleObject } from '../../Types/SimpleObject';
import { useSearchParams } from 'react-router-dom';

interface CountryObject {
  country: string;
}

interface Props {
  width: string;
  content: string[] | Array<{ [key: string]: string | string[] }>;
  customValue?: number | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCustomValue?: Dispatch<SetStateAction<any>>;
  setCity?: (currentCountry: string) => void;
  setInputs?: (inputs: SimpleObject) => void;
  nameOfValue?: string;
  inputs?: SimpleObject;
  withoutBackground?: boolean;
  changeLanguage?: boolean;
}

export const DropDownMenu: FC<Props> = ({
  width,
  content,
  setCity,
  customValue,
  setCustomValue,
  setInputs,
  nameOfValue,
  inputs,
  withoutBackground,
  changeLanguage,
}) => {
  const inputsFromStorage = localStorage.getItem('place-order');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<string>(
    (typeof content[0] === 'string' && content[0]) || '-'
  );
  const searchParams = useSearchParams();
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (value === '-' && inputsFromStorage) {
      if (nameOfValue === 'City') {
        setValue(JSON.parse(inputsFromStorage).city);
      } else {
        setValue(JSON.parse(inputsFromStorage).country);
      }
    }
    //eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (setCity && inputs && inputsFromStorage) {
      if (JSON.parse(inputsFromStorage).city.length) {
        setCity(inputs.country);
      }
    }
    //eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [anchorEl]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value: string) => {
    handleClose();

    if (changeLanguage) {
      i18n.changeLanguage(value.toLowerCase());
      searchParams[1](`language=${i18n.language}`);
    }

    if (setCustomValue && customValue) {
      if (typeof customValue === 'string') {
        setCustomValue(value);
      } else {
        setCustomValue(Number(value));
      }
    } else {
      setValue(value);
    }
  };

  const handleUpdateLocalStorage = (name: string, value: string) => {
    if (inputsFromStorage && !customValue) {
      localStorage.setItem(
        'place-order',
        JSON.stringify({
          ...JSON.parse(inputsFromStorage),
          [name]: value,
        })
      );
    }
  };

  const theme = createTheme({
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            '&.MuiButton-root': {
              background: !withoutBackground ? '#191536' : 'none',
              width,
              minHeight: !withoutBackground ? '50px' : 'none',
              color: !withoutBackground ? '#fff' : '#05c2df',
              textTransform: withoutBackground && 'none',
              fontSize: '20px',
              gap: withoutBackground && '5px',
              display: !withoutBackground && 'flex',
              paddingLeft: '20px',
              justifyContent: !withoutBackground ? 'space-between' : 'start',
              padding: withoutBackground && '0',
              alignItems: withoutBackground ? 'end' : 'center',
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            '&.MuiMenu-paper': {
              backgroundColor: 'transparent',
              minWidth: width,
              marginTop: '5px',
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            ':hover': {
              backgroundColor: '#191554',
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            '&.MuiMenu-list': {
              background: '#191536',
            },
          },
        },
      },
    },
  });

  function isCountryObject<T>(obj: T | null): obj is T & CountryObject {
    return obj !== null && typeof obj === 'object' && 'country' in obj;
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          disabled={nameOfValue === 'City' && inputs && !inputs.country}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {customValue && !nameOfValue ? customValue : (value as ReactNode)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            style={{
              transform: `rotateX(${open ? '180deg' : '0deg'})`,
              transition: 'transform 0.3s ease',
            }}
            height="7"
            viewBox="0 0 9 5"
            fill="none"
          >
            <path
              d="M4.5 5L0.602885 0.5L8.39711 0.500001L4.5 5Z"
              fill="#05C2DF"
            />
          </svg>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {typeof content[0] !== 'string' && setCity
            ? content.map((v, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleClose();
                    if (isCountryObject(v)) {
                      setValue(v.country);
                      setCity(v.country);
                      handleUpdateLocalStorage('country', v.country);
                      if (setInputs) {
                        setInputs({ ...inputs, country: v.country });
                      }
                    }
                  }}
                >
                  {isCountryObject(v) ? v.country : ''}
                </MenuItem>
              ))
            : content.map((v, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleMenuItemClick(v as string);
                    handleUpdateLocalStorage('city', v as string);
                    if (setInputs) {
                      setInputs({ ...inputs, city: v as string });
                    }
                  }}
                >
                  {v as string}
                </MenuItem>
              ))}
        </Menu>
      </ThemeProvider>
    </div>
  );
};
