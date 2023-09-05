import { FC } from "react";
import IconButton from "@mui/material/Button";
import "./header.scss";
import { BurgerMenuIcon } from "../../assets/BurgerMenuIcon";
import { Logo } from "../../assets/Logo";
import { SizeOfIcon } from "../../Enums/SizeOfIcon";

interface Props {
  setIsMenuOpened: (value: boolean) => void;
}

export const Header: FC<Props> = ({ setIsMenuOpened }) => {
  const handleOpenMenu = () => setIsMenuOpened(true);

  return (
    <div className="header">
      {/* LOGO */}
      <Logo size={SizeOfIcon.SMALL} />

      {/* BURGER MENU */}
      <IconButton aria-label="burger-menu" onClick={handleOpenMenu}>
        <BurgerMenuIcon />
      </IconButton>
    </div>
  );
};
