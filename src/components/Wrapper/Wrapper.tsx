import { FC, ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./wrapper.scss";
import cn from "classnames";

interface Props {
  setIsMenuOpened: (value: boolean) => void;
  children: ReactNode;
}

export const Wrapper: FC<Props> = ({ setIsMenuOpened, children }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className={cn("wrapper", { "wrapper--onPc": isLargeScreen })}>
      <Header setIsMenuOpened={setIsMenuOpened} />
      {children}
      <Footer />
    </div>
  );
};
