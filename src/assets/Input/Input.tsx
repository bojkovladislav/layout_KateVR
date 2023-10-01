import { FC, ChangeEvent } from "react";
import { MuiTelInput } from "mui-tel-input";
import { TextField } from "@mui/material";

interface Props {
  value: string;
  placeholder: string;
  isError: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangePhone?: (newValue: string) => void;
  errorMessage: string;
  inputForPhone?: boolean;
}

export const Input: FC<Props> = ({
  value,
  placeholder,
  isError,
  handleChange,
  errorMessage,
  handleChangePhone,
  inputForPhone,
}) => {
  return (
    <>
      {inputForPhone ? (
        <MuiTelInput
          defaultCountry="UA"
          value={value}
          onChange={handleChangePhone}
          error={isError}
          fullWidth
          placeholder="Phone number"
          variant="standard"
          size="medium"
          color="primary"
        />
      ) : (
        <TextField
          value={value}
          variant="standard"
          placeholder={placeholder}
          error={isError}
          onChange={handleChange}
        />
      )}

      {isError && <p className="getInTouch__error">{errorMessage}</p>}
    </>
  );
};
