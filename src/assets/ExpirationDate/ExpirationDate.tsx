import { FC, useEffect, useState } from "react";
import { InputWrapper } from "../InputWrapper";
import { ThemeProvider, TextField } from "@mui/material";
import "./expirationDate.scss";
import { themeForCardInput } from "../../helpers/Forms/themeForCardInput";
import { SimpleObject } from "../../Types/SimpleObject";
import { InputError } from "../InputError";

interface Props {
  cardInfo: SimpleObject;
  setCardInfo: (cardInfo: SimpleObject) => void;
  cardErrors: SimpleObject;
  setCardErrors: (cardErrors: SimpleObject) => void;
}

export const ExpirationDate: FC<Props> = ({
  cardInfo,
  setCardInfo,
  cardErrors,
  setCardErrors,
}) => {
  const [isUserClearing, setIsUserClearing] = useState(false);

  useEffect(() => {
    const { expirationDate } = cardInfo;

    if (expirationDate.length === 2 && !isUserClearing) {
      setCardInfo({
        ...cardInfo,
        expirationDate: expirationDate + "/",
      });
    }
  }, [cardInfo.expirationDate]);

  const handleChange = (value: string) => {
    const newValue = value.replace("/", "");

    if (isNaN(+newValue)) {
      return;
    }

    setCardInfo({ ...cardInfo, expirationDate: value });
    setCardErrors({ ...cardErrors, expirationDate: "" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setIsUserClearing(e.key === "Backspace");
  };

  return (
    <InputWrapper label="Expiration date">
      <ThemeProvider theme={themeForCardInput}>
        <TextField
          className="expirationDate"
          variant="standard"
          placeholder="MM/YY"
          value={cardInfo.expirationDate}
          inputProps={{ maxLength: 5 }}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          error={!!cardErrors.expirationDate}
        />
      </ThemeProvider>
      {cardErrors.expirationDate && (
        <InputError errorMessage={cardErrors.expirationDate} />
      )}
    </InputWrapper>
  );
};
