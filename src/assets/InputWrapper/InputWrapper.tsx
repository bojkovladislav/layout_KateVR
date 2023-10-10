import { FC, ReactNode } from "react";
import "./inputWrapper.scss";

interface Props {
  children: ReactNode;
  label: string;
  highlighted?: boolean;
}

export const InputWrapper: FC<Props> = ({ label, children, highlighted }) => {
  return (
    <div className="inputWrapper">
      <label
        style={{
          color: highlighted ? "#05c2df" : "#929292",
          marginBottom: "15px",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
};
