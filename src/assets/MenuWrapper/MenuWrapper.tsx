import { FC, ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./menuWrapper.scss";
import { Link } from "react-router-dom";

interface Props {
  handleCloseMenu: () => void;
  children: ReactNode;
}

export const MenuWrapper: FC<Props> = ({ children, handleCloseMenu }) => {
  return (
    <div className="menuWrapper">
      <header className="menuWrapper__header">
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
