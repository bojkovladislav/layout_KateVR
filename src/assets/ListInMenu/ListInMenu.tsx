import { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import "./listInMenu.scss";

interface Props {
  listOfItems: string[];
  language?: boolean;
}

export const ListInMenu: FC<Props> = ({ listOfItems, language }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "transparent" }}>
      {listOfItems.map((value) => (
        <ListItem
          className="listItem"
          key={value}
          disableGutters
          disablePadding
        >
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
        </ListItem>
      ))}
    </List>
  );
};
