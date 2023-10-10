import { FC } from "react";
import "./inputError.scss";

interface Props {
  errorMessage: string;
}

export const InputError: FC<Props> = ({ errorMessage }) => {
  return <p className="inputError">{errorMessage}</p>;
};
