import { FC, useState, useEffect, useRef } from "react";
import "./cardNumber.scss";
import { TextField, ThemeProvider } from "@mui/material";
import { SimpleObject } from "../../Types/SimpleObject";
import { InputWrapper } from "../InputWrapper";
import { themeForCardInput } from "../../helpers/Forms/themeForCardInput";
import { InputError } from "../InputError";

type Inputs = {
  [key: string]: string;
};

interface Props {
  cardInfo: SimpleObject;
  setCardInfo: (cardInfo: SimpleObject) => void;
  cardErrors: SimpleObject;
  setCardErrors: (cardErrors: SimpleObject) => void;
}

export const CardNumber: FC<Props> = ({
  cardInfo,
  setCardInfo,
  cardErrors,
  setCardErrors,
}) => {
  const [inputs, setInputs] = useState<Inputs>({
    "1": "",
    "2": "",
    "3": "",
    "4": "",
  });

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (Object.values(inputs).every((input) => input.length === 4)) {
      const cardNumber = Object.values(inputs).reduce(
        (acc, currentValue) => acc + currentValue
      );

      setCardInfo({ ...cardInfo, cardNumber });
    }
  }, [inputs]);

  const handleChange = (value: string, index: string) => {
    if (isNaN(+value)) return;

    setInputs({ ...inputs, [index]: value });
    setCardErrors({ ...cardErrors, cardNumber: "" });

    if (value.length === 4 && inputRefs.current[+index] && +index < 4) {
      inputRefs.current[+index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: string
  ) => {
    if (e.key === "Backspace" && inputs[index].length === 0) {
      e.preventDefault();

      if (+index > 1) {
        inputRefs.current[Number(index) - 1]?.focus();
      }
    }
  };

  return (
    <div className="cardNumber">
      <InputWrapper label="Card Number" highlighted>
        <div className="cardNumber__container">
          <div className="cardNumber__input-wrapper">
            {Object.keys(inputs).map((key) => (
              <ThemeProvider theme={themeForCardInput} key={key}>
                <TextField
                  variant="standard"
                  type="text"
                  inputProps={{ maxLength: 4 }}
                  placeholder="0000"
                  value={inputs[key]}
                  onKeyDown={(e) => handleKeyDown(e, key)}
                  inputRef={(ref) => (inputRefs.current[+key] = ref)}
                  onChange={(e) => handleChange(e.target.value, key)}
                />
              </ThemeProvider>
            ))}
          </div>
          <div className="cardNumber__cards">
            <img
              src="./images/visa.svg"
              alt="Visa"
              style={{ opacity: inputs["1"].indexOf("4") === 0 ? 1 : 0.3 }}
            />
            <img
              src="./images/mastercard.svg"
              alt="Mastercard"
              style={{
                opacity:
                  inputs["1"].indexOf("2") === 0 ||
                  inputs["1"].indexOf("5") === 0
                    ? 1
                    : 0.3,
              }}
            />
          </div>
        </div>
      </InputWrapper>

      {cardErrors.cardNumber && (
        <InputError errorMessage={cardErrors.cardNumber} />
      )}
    </div>
  );
};
