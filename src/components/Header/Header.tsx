import { FC, useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { BurgerMenuIcon } from '../../assets/BurgerMenuIcon';
import { Logo } from '../../assets/Logo';
import { SizeOfIcon } from '../../Enums/SizeOfIcon';
import { Appearance } from '../../assets/animations/Appearance';
import './header.scss';
import { Link, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import { DropDownMenu } from '../../assets/DropDownMenu';
import { SlideDirection } from '../../Enums/SlideDirection';
import { Slide } from '../../assets/animations/Slide';
import { countDelay } from '../../helpers/countDelay';
import { useTranslation } from 'react-i18next';

interface Props {
  setIsMenuOpened: (value: boolean) => void;
}

const headerList = ['About', 'Tech', 'Benefits', 'Contact'];

export const Header: FC<Props> = ({ setIsMenuOpened }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const handleOpenMenu = () => setIsMenuOpened(true);
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [language, setLanguage] = useState<number | string>('');

  useEffect(() => {
    const initialLanguage = searchParams.get('language');
    const firstChar = initialLanguage?.charAt(0).toLocaleUpperCase();

    if (initialLanguage) setLanguage(firstChar + initialLanguage.slice(1));
    //eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn('header', { 'header--onPc': isLargeScreen })}>
      <div className="header__logo-container">
        <Appearance increase>
          <Logo size={SizeOfIcon.BIG} />
        </Appearance>

        {isLargeScreen && (
          <DropDownMenu
            content={['En', 'Ua']}
            width="60px"
            withoutBackground
            changeLanguage
            customValue={language}
            setCustomValue={setLanguage}
          />
        )}
      </div>

      {isLargeScreen ? (
        <div className="header__navigation">
          <ul className="header__list">
            {headerList.map((item, i) => (
              <Slide
                key={item}
                direction={SlideDirection.TOP}
                delay={countDelay(i, 0.2)}
              >
                <li>
                  <Link
                    to={`/#${item.toLowerCase()}`}
                    className="header__nav-item"
                  >
                    {t(item)}
                  </Link>
                </li>
              </Slide>
            ))}
          </ul>

          <Appearance delay={1.5}>
            <Button
              variant="contained"
              sx={{
                background: '#05c2df',
                width: '200px',
                padding: 0,
              }}
            >
              <Link
                to="/checkout"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'inline-block',
                  padding: '5px',
                }}
              >
                {t('BUY')}
              </Link>
            </Button>
          </Appearance>
        </div>
      ) : (
        <button aria-label="burger-menu" onClick={handleOpenMenu}>
          <BurgerMenuIcon />
        </button>
      )}
    </div>
  );
};
