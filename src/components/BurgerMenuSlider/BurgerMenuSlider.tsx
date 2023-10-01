import { FC } from "react";
import "./burgerMenu.scss";
import { ListInMenu } from "../../assets/ListInMenu";
import { Route, Routes } from "react-router-dom";
import { SelectLanguage } from "../SelectLanguage";
import { MenuWrapper } from "../../assets/MenuWrapper";
import { FAQ } from "../FAQ";
import { Help } from "../Help";

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
  return (
    <div
      className="burgerMenuSlider"
      style={{ transform: `translateX(${isMenuOpened ? "0" : "100%"})` }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <MenuWrapper handleCloseMenu={handleCloseMenu}>
              <ListInMenu
                listOfItems={listOfItems}
                handleCloseMenu={handleCloseMenu}
              />
            </MenuWrapper>
          }
        />
        <Route path="/language" element={<SelectLanguage />} />
        <Route
          path="/faq"
          element={
            <MenuWrapper handleCloseMenu={handleCloseMenu}>
              <FAQ />
            </MenuWrapper>
          }
        />
        <Route
          path="/help"
          element={
            <MenuWrapper handleCloseMenu={handleCloseMenu}>
              <Help />
            </MenuWrapper>
          }
        />
      </Routes>
    </div>
  );
};
