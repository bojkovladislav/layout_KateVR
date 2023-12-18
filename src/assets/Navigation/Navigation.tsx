import { FC } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import "./navigation.scss";

interface Props {
  navLinks: string[];
  onPc?: boolean;
}

export const Navigation: FC<Props> = ({ navLinks, onPc }) => {
  return (
    <nav className="navigation">
      <ul
        className={cn("navigation__list", { "navigation__list--onPc": onPc })}
      >
        {navLinks.map((navLink) => (
          <NavLink
            to={`/#${navLink.toLowerCase()}`}
            key={navLink}
            className="navigation__navLink"
          >
            {navLink}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
