import { FC } from "react";
import { Link } from "react-router-dom";
import "./listInMenu.scss";

interface Props {
  listOfItems: string[];
  language?: boolean;
  handleCloseMenu?: () => void;
}

export const ListInMenu: FC<Props> = ({
  listOfItems,
  language,
  handleCloseMenu,
}) => {
  return (
    <nav>
      <ul className="listInMenu">
        {listOfItems.map((value) => (
          <li className="listInMenu__listItem" key={value}>
            {value !== "Language" &&
            value !== "FAQ" &&
            value !== "Help" &&
            handleCloseMenu ? (
              <Link
                to={`#${value.toLowerCase()}`}
                onClick={handleCloseMenu}
                className="listInMenu__link"
              >
                {value}
              </Link>
            ) : (
              <Link
                to={
                  language
                    ? `/?language=${value.toLowerCase()}`
                    : `/${value.toLowerCase()}`
                }
                className="listInMenu__link"
              >
                {value}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
