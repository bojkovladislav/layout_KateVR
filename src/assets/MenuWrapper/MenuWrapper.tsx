import { FC, ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./menuWrapper.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

interface Props {
  handleCloseMenu: () => void;
  children: ReactNode;
}

export const MenuWrapper: FC<Props> = ({ children, handleCloseMenu }) => {
  const location = useLocation();

  return (
    <div className="menuWrapper">
      <header
        className={cn("menuWrapper__header", {
          "menuWrapper__header--special": location.pathname !== "/",
        })}
      >
        <button onClick={handleCloseMenu}>
          <Link to={"/"}>
            <CloseIcon style={{ color: "#fff" }} />
          </Link>
        </button>
      </header>

      {children}
    </div>
  );
};
