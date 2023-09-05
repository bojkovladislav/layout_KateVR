import { FC } from "react";
import { Link } from "react-router-dom";
import "./logo.scss";
import { SizeOfLogo } from "../../Enums/SizeOfIcon";

interface Props {
  size: SizeOfLogo;
}

export const Logo: FC<Props> = ({ size }) => {
  return (
    <Link to="/">
      <img src="/icons/logo.svg" className={`logo logo__${size}`} alt="Logo" />
    </Link>
  );
};
