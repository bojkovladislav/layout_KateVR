import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

interface Props {
  navLinks: string[];
}

export const Navigation: FC<Props> = ({ navLinks }) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
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
