import { FC } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./wrapper.scss";

interface Props {
  setIsMenuOpened: (value: boolean) => void;
}

export const Wrapper: FC<Props> = ({ setIsMenuOpened, children }) => {
  return (
    <div className="wrapper">
      <Header setIsMenuOpened={setIsMenuOpened} />
      {children}
      <Footer />
    </div>
  );
};
