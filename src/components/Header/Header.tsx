import { FC } from "react";
import IconButton from "@mui/material/Button";
import { BurgerMenuIcon } from "../../assets/BurgerMenuIcon";
import { Logo } from "../../assets/Logo";
import { SizeOfIcon } from "../../Enums/SizeOfIcon";
import { Appearance } from "../../assets/animations/Appearance";
import "./header.scss";

interface Props {
  setIsMenuOpened: (value: boolean) => void;
}

export const Header: FC<Props> = ({ setIsMenuOpened }) => {
  const handleOpenMenu = () => setIsMenuOpened(true);

  return (
    <div className="header">
      <Appearance increase>
        <Logo size={SizeOfIcon.SMALL} />
      </Appearance>

      {/* BURGER MENU */}
      <IconButton aria-label="burger-menu" onClick={handleOpenMenu}>
        <BurgerMenuIcon />
      </IconButton>
    </div>
  );
};
