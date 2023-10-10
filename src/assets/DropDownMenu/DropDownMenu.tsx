import { FC, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material";

interface Props {
  width: string;
  content: string[] | Array<{ [key: string]: string | string[] }>;
  customValue?: number;
  setCustomValue?: (value: number) => void;
  setCity?: (currentCountry: string) => void;
}

export const DropDownMenu: FC<Props> = ({
  width,
  content,
  setCity,
  customValue,
  setCustomValue,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState(content[0] || null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value: string) => {
    handleClose();

    if (setCustomValue && customValue) {
      setCustomValue(+value);
    } else {
      setValue(value);
    }
  };

  const theme = createTheme({
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            "&.MuiButton-root": {
              background: "#191536",
              width,
              minHeight: "50px",
              color: "#fff",
              fontSize: "20px",
              display: "flex",
              paddingLeft: "20px",
              justifyContent: !value ? "flex-end" : "space-between",
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            "&.MuiMenu-paper": {
              backgroundColor: "transparent",
              minWidth: width,
              marginTop: "5px",
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            ":hover": {
              backgroundColor: "#191554",
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            "&.MuiMenu-list": {
              background: "#191536",
            },
          },
        },
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          disabled={!content[0]}
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {customValue ? customValue : value}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            style={{
              transform: `rotateX(${open ? "180deg" : "0deg"})`,
              transition: "transform 0.3s ease",
            }}
            height="5"
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
            "aria-labelledby": "basic-button",
          }}
        >
          {setCity
            ? content.map((v, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleClose();
                    setValue(v.country);
                    setCity(v.country);
                  }}
                >
                  {v.country}
                </MenuItem>
              ))
            : content.map((v, index) => (
                <MenuItem key={index} onClick={() => handleMenuItemClick(v)}>
                  {v as string}
                </MenuItem>
              ))}
        </Menu>
      </ThemeProvider>
    </div>
  );
};
