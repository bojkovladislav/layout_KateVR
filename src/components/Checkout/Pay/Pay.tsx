import { FC, useState, useEffect } from "react";
import cn from "classnames";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./pay.scss";
import { CardNumber } from "../../../assets/CardNumber";
import { SimpleObject } from "../../../Types/SimpleObject";
import { TextField, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import { inputTheme } from "../../../helpers/Forms/inputTheme";
import { ExpirationDate } from "../../../assets/ExpirationDate";
import { CVV } from "../../../assets/CVV";
import { InputError } from "../../../assets/InputError";
import { FakeLoad } from "../../../assets/FakeLoaderContainer";

const masterCardPattern =
  /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
const visaCardPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
const expirationDatePattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

interface Props {
  setPaySubmitted: (paySubmitted: boolean) => void;
}

export const Pay: FC<Props> = ({ setPaySubmitted }) => {
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

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

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

    if (name === "cardHolderName" && !isNaN(parseInt(value))) {
      currentErrors.cardHolderName =
        "This field should not include any numbers";
    }

    if (name === "cvv" && value.length !== 3) {
      currentErrors.cvv = "Cvv should consist of 3 numbers";
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

    localStorage.setItem("pay", JSON.stringify(cardInfo));
    setPaySubmitted(true);
  };

  function renderForm() {
    return (
      <form
        className={cn("pay__form", { "pay__form--onPc": isLargeScreen })}
        onSubmit={handleFormSubmit}
      >
        <div className="pay__wrapper">
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
        </div>

        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "#05c2df",
            width: isLargeScreen ? "200px" : "100%",
            height: isLargeScreen ? "50px" : "",
          }}
        >
          Purchase
        </Button>
      </form>
    );
  }

  useEffect(() => {
    const storage = localStorage.getItem("pay");

    if (Object.values(cardErrors).every((error) => !error) && storage) {
      setCardInfo({ ...JSON.parse(storage) });
    }
  }, []);

  useEffect(() => {
    if (Object.values(cardInfo).some((item) => item.length)) {
      localStorage.setItem("pay", JSON.stringify(cardInfo));
    }
  }, [cardInfo]);

  return (
    <div className={cn("pay", { "pay--onPc": isLargeScreen })}>
      <FakeLoad delay={500} centerByY centerByX={isLargeScreen}>
        {renderForm()}
      </FakeLoad>
    </div>
  );
};
