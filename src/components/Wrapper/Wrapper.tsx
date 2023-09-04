import { FC } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Wrapper: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
