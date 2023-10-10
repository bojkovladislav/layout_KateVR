import { FC } from "react";
import { InputWrapper } from "../InputWrapper";
import { TextField, ThemeProvider } from "@mui/material";
import { themeForCardInput } from "../../helpers/Forms/themeForCardInput";
import { SimpleObject } from "../../Types/SimpleObject";
import { InputError } from "../InputError";

interface Props {
  cardInfo: SimpleObject;
  setCardInfo: (cardInfo: SimpleObject) => void;
  cardErrors: SimpleObject;
  setCardErrors: (cardErrors: SimpleObject) => void;
}

export const CVV: FC<Props> = ({
  cardInfo,
  setCardInfo,
  cardErrors,
  setCardErrors,
}) => {
  const handleChange = (newValue: string) => {
    if (isNaN(+newValue)) return;

    setCardInfo({ ...cardInfo, cvv: newValue });
    setCardErrors({ ...cardErrors, cvv: "" });
  };

  return (
    <InputWrapper label="CVV">
      <ThemeProvider theme={themeForCardInput}>
        <TextField
          variant="standard"
          value={cardInfo.cvv}
          onChange={(e) => handleChange(e.target.value)}
          inputProps={{ maxLength: 3 }}
          style={{ maxWidth: "45px" }}
          placeholder="000"
          error={!!cardErrors.cvv}
        />
      </ThemeProvider>
      {cardErrors.cvv && <InputError errorMessage={cardErrors.cvv} />}
    </InputWrapper>
  );
};
