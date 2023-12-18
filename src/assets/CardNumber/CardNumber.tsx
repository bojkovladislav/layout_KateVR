import { FC, useState, useEffect, useRef } from "react";
import cn from "classnames";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
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
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const storage = localStorage.getItem("pay");

  const [inputs, setInputs] = useState<Inputs>(
    !storage
      ? {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
        }
      : {
          "1": JSON.parse(storage).cardNumber.slice(0, 4),
          "2": JSON.parse(storage).cardNumber.slice(4, 8),
          "3": JSON.parse(storage).cardNumber.slice(8, 12),
          "4": JSON.parse(storage).cardNumber.slice(
            12,
            JSON.parse(storage).cardNumber.length
          ),
        }
  );

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const cardNumber = Object.values(inputs).reduce(
      (acc, currentValue) => acc + currentValue
    );

    setCardInfo({ ...cardInfo, cardNumber });
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
        <div
          className={cn("cardNumber__container", {
            "cardNumber__container--onPc": isLargeScreen,
          })}
        >
          <div className="cardNumber__input-wrapper">
            {Object.keys(inputs).map((key) => (
              <ThemeProvider theme={themeForCardInput} key={key}>
                <TextField
                  variant="standard"
                  type="tel"
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
