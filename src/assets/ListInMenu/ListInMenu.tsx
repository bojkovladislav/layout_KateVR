import { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
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
      <List>
        {listOfItems.map((value) => (
          <ListItem
            className="listItem"
            key={value}
            disableGutters
            disablePadding
          >
            {value !== "Language" &&
            value !== "FAQ" &&
            value !== "Help" &&
            handleCloseMenu ? (
              <Link
                to={`#${value.toLowerCase()}`}
                onClick={handleCloseMenu}
                className="listItem__link"
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
                className="listItem__link"
              >
                {value}
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
