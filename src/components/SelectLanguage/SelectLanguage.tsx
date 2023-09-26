import { FC } from "react";
import { ListInMenu } from "../../assets/ListInMenu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import "./selectLanguage.scss";

const list = [
  "English",
  "Ukrainian",
  "Chinese(Traditional)",
  "Chinese(Simplified)",
  "French",
  "German",
  "Italian",
  "Polish",
];

export const SelectLanguage: FC = () => {
  return (
    <div className="selectLanguage">
      <header className="selectLanguage__header">
        <Link to={"/"}>
          <ArrowBackIosIcon />
        </Link>
      </header>

      <ListInMenu listOfItems={list} language />
    </div>
  );
};
