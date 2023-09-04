import { FC } from "react";
import IconButton from "@mui/material/Button";
import "./header.scss";
import { BurgerMenuIcon } from "../../assets/BurgerMenuIcon";
import { Logo } from "../../assets/Logo";
import { SizeOfLogo } from "../../Enums/SizeOfLogo";

export const Header: FC = () => {
  return (
    <div className="header">
      {/* LOGO */}
      <Logo size={SizeOfLogo.SMALL} />

      {/* BURGER MENU */}
      <IconButton aria-label="burger menu">
        <BurgerMenuIcon />
      </IconButton>
    </div>
  );
};
