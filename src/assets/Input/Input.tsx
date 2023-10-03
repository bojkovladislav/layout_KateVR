import { FC } from "react";
import { MuiTelInput } from "mui-tel-input";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import "./input.scss";

interface Props {
  value: string;
  placeholder: string;
  handleChange: (placeholder: string, newValue: string) => void;
  errorMessage: string;
  inputForPhone?: boolean;
}

export const Input: FC<Props> = ({
  value,
  placeholder,
  handleChange,
  errorMessage,
  inputForPhone,
}) => {
  const handleInputChange = (newValue: string) => {
    handleChange(placeholder, newValue);
  };

  const theme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            paddingBottom: "19px",
            "& input": {
              color: "#fff",
            },
            "&.MuiInput-root::before": {
              borderBottom: "1px solid #2f2f2f",
            },
            "&.MuiInput-root:hover:not(error)::before": {
              borderBottom: "1px solid #2f2f2f",
            },
            "&.MuiInput-root.Mui-error:hover:not(disabled)::before": {
              borderBottom: "1px solid #d32f2f",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {inputForPhone ? (
        <MuiTelInput
          defaultCountry="UA"
          value={value}
          onChange={handleInputChange}
          error={!!errorMessage}
          placeholder="Phone number"
          variant="standard"
        />
      ) : (
        <TextField
          value={value}
          variant="standard"
          placeholder={placeholder}
          error={!!errorMessage}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      )}

      {!!errorMessage && <p className="input__error">{errorMessage}</p>}
    </ThemeProvider>
  );
};
