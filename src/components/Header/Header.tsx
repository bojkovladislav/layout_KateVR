import { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { BurgerMenuIcon } from "../../assets/BurgerMenuIcon";
import { Logo } from "../../assets/Logo";
import { SizeOfIcon } from "../../Enums/SizeOfIcon";
import { Appearance } from "../../assets/animations/Appearance";
import "./header.scss";
import { Link } from "react-router-dom";
import cn from "classnames";
import { DropDownMenu } from "../../assets/DropDownMenu";

interface Props {
  setIsMenuOpened: (value: boolean) => void;
}

const headerList = ["About", "Tech", "Benefits", "Contact"];

export const Header: FC<Props> = ({ setIsMenuOpened }) => {
  const handleOpenMenu = () => setIsMenuOpened(true);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className={cn("header", { "header--onPc": isLargeScreen })}>
      <div className="header__logo-container">
        <Appearance increase>
          <Logo size={SizeOfIcon.BIG} />
        </Appearance>

        {isLargeScreen && (
          <DropDownMenu content={["En", "Ua"]} width="60px" withoutBackground />
        )}
      </div>

      {isLargeScreen ? (
        <div className="header__navigation">
          <ul className="header__list">
            {headerList.map((item) => (
              <li key={item}>
                <Link
                  to={`/#${item.toLowerCase()}`}
                  className="header__nav-item"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            variant="contained"
            sx={{
              background: "#05c2df",
              width: "200px",
              padding: 0,
            }}
          >
            <Link
              to="/checkout"
              style={{
                width: "100%",
                height: "100%",
                display: "inline-block",
                padding: "5px",
              }}
            >
              Buy now
            </Link>
          </Button>
        </div>
      ) : (
        <button aria-label="burger-menu" onClick={handleOpenMenu}>
          <BurgerMenuIcon />
        </button>
      )}
    </div>
  );
};
