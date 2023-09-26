import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./burgerMenu.scss";
import { ListInMenu } from "../../assets/ListInMenu";
import { useLocation } from "react-router-dom";
import { SelectLanguage } from "../SelectLanguage";

const listOfItems = [
  "About",
  "Tech",
  "Benefits",
  "Contact",
  "Language",
  "FAQ",
  "Help",
];

interface Props {
  isMenuOpened: boolean;
  setIsMenuOpened: (value: boolean) => void;
}

export const BurgerMenuSlider: FC<Props> = ({
  isMenuOpened,
  setIsMenuOpened,
}) => {
  const handleCloseMenu = () => setIsMenuOpened(false);
  const location = useLocation();

  return (
    <div
      className="burgerMenuSlider"
      style={{ transform: `translateX(${isMenuOpened ? "0" : "100%"})` }}
    >
      {location.pathname === "/language" ? (
        <SelectLanguage />
      ) : (
        <>
          <header className="burgerMenuSlider__header">
            <button onClick={handleCloseMenu}>
              <CloseIcon style={{ color: "#fff" }} />
            </button>
          </header>

          <ListInMenu listOfItems={listOfItems} />
        </>
      )}
    </div>
  );
};
