import { FC, useState } from "react";
import "./pay.scss";
import { CardNumber } from "../../../assets/CardNumber";
import { SimpleObject } from "../../../Types/SimpleObject";
import { TextField, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import { inputTheme } from "../../../helpers/Forms/InputTheme";
import { ExpirationDate } from "../../../assets/ExpirationDate";
import { CVV } from "../../../assets/CVV";
import { InputError } from "../../../assets/InputError";

const masterCardPattern =
  /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
const visaCardPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
const expirationDatePattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

export const Pay: FC = () => {
  const [cardInfo, setCardInfo] = useState<SimpleObject>({
    cardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    cvv: "",
  });

  const [cardErrors, setCardErrors] = useState<SimpleObject>({
    cardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    cvv: "",
  });

  const validateCardInfo = (value: string, name: string) => {
    const currentErrors: SimpleObject = {};
    const updatedName = name.length > 3 ? "Card Holder Name" : "CVV";

    if (!value.length) {
      currentErrors[name] = `${updatedName} field is required!`;
    }

    if (
      name === "cardNumber" &&
      !masterCardPattern.test(value) &&
      !visaCardPattern.test(value)
    ) {
      currentErrors.cardNumber = "Card number is invalid";
    }

    if (name === "expirationDate" && !expirationDatePattern.test(value)) {
      currentErrors.expirationDate =
        "Expiration date is not valid. Pattern: MM/YY";
    }

    return currentErrors;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors: SimpleObject = {};

    Object.entries(cardInfo).forEach((entry: [key: string, value: string]) => {
      const [key, value] = entry;
      const errors = validateCardInfo(value, key);

      newErrors = {
        ...newErrors,
        ...errors,
      };
    });

    setCardErrors(newErrors);

    if (Object.values(newErrors).some((error) => !!error)) {
      return;
    }
  };

  return (
    <div className="pay">
      <form className="pay__form" onSubmit={handleFormSubmit}>
        <CardNumber
          cardInfo={cardInfo}
          setCardInfo={setCardInfo}
          cardErrors={cardErrors}
          setCardErrors={setCardErrors}
        />
        <ThemeProvider theme={inputTheme}>
          <div className="pay__input-container">
            <TextField
              value={cardInfo.cardHolderName}
              variant="standard"
              placeholder="Card Holder Name"
              onChange={(e) => {
                setCardInfo({ ...cardInfo, cardHolderName: e.target.value });
                setCardErrors({ ...cardErrors, cardHolderName: "" });
              }}
              error={!!cardErrors.cardHolderName}
            />
            {cardErrors.cardHolderName && (
              <InputError errorMessage={cardErrors.cardHolderName} />
            )}
          </div>
          <div className="pay__inputs-container">
            <ExpirationDate
              cardInfo={cardInfo}
              setCardInfo={setCardInfo}
              cardErrors={cardErrors}
              setCardErrors={setCardErrors}
            />

            <CVV
              cardInfo={cardInfo}
              setCardInfo={setCardInfo}
              cardErrors={cardErrors}
              setCardErrors={setCardErrors}
            />
          </div>
        </ThemeProvider>

        <Button
          type="submit"
          variant="contained"
          sx={{ background: "#05c2df", width: "100%" }}
        >
          Purchase
        </Button>
      </form>
    </div>
  );
};
