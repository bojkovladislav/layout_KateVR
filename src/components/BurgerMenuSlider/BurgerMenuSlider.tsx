import { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./burgerMenu.scss";
import { SizeOfIcon } from "../../Enums/SizeOfIcon";

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
      <header className="burgerMenuSlider__header">
        <button onClick={handleCloseMenu}>
          <CloseIcon style={{ color: "#fff" }} fontSize={SizeOfIcon.MEDIUM} />
        </button>
      </header>

      <List sx={{ width: "100%", bgcolor: "transparent" }}>
        {listOfItems.map((value) => (
          <ListItem
            className="burgerMenuSlider__listItem"
            key={value}
            onClick={handleCloseMenu}
            disableGutters
            disablePadding
          >
            <Link
              to={`/${value.toLowerCase()}`}
              className="burgerMenuSlider__link"
            >
              {value}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
