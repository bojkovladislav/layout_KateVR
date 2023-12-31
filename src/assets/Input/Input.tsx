import { FC } from "react";
import { MuiTelInput } from "mui-tel-input";
import { TextField, ThemeProvider } from "@mui/material";
import { DropDownMenu } from "../DropDownMenu";
import { inputTheme } from "../../helpers/Forms/inputTheme";
import { InputWrapper } from "../InputWrapper";
import { InputError } from "../InputError";
import { SimpleObject } from "../../Types/SimpleObject";
interface Props {
  value: string;
  placeholder: string;
  handleChange: (placeholder: string, newValue: string) => void;
  errorMessage: string;
  inputForPhone?: boolean;
  dropDownMenu?: {
    [key: string]: string[] | Array<{ [key: string]: string | string[] }>;
  };
  setCity?: (currentCountry: string) => void;
  maxLength?: number;
  setInputs?: (inputs: SimpleObject) => void;
  inputs?: SimpleObject;
}

export const Input: FC<Props> = ({
  value,
  placeholder,
  handleChange,
  errorMessage,
  inputForPhone,
  dropDownMenu,
  setCity,
  inputs,
  setInputs,
  maxLength,
}) => {
  const handleInputChange = (newValue: string) => {
    handleChange(placeholder, newValue);
  };

  return (
    <ThemeProvider theme={inputTheme}>
      {inputForPhone && (
        <MuiTelInput
          defaultCountry="UA"
          value={value}
          onChange={handleInputChange}
          error={!!errorMessage}
          placeholder="Phone number"
          variant="standard"
          inputProps={{ maxLength }}
        />
      )}

      {!inputForPhone && !dropDownMenu && (
        <TextField
          value={value}
          variant="standard"
          placeholder={placeholder}
          error={!!errorMessage}
          inputProps={{ maxLength }}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      )}

      {dropDownMenu && (
        <>
          {Object.entries(dropDownMenu).map((entry) => {
            const [key, value] = entry;

            return (
              <InputWrapper label={key} key={key}>
                <DropDownMenu
                  width={"90%"}
                  content={value}
                  setInputs={setInputs}
                  inputs={inputs}
                  setCity={setCity}
                  nameOfValue={key}
                />
              </InputWrapper>
            );
          })}
        </>
      )}

      {!!errorMessage && <InputError errorMessage={errorMessage} />}
    </ThemeProvider>
  );
};
