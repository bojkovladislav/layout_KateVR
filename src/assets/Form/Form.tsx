import { FC, FormEvent, useState, useMemo, useEffect } from "react";
import cn from "classnames";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { SimpleObject } from "../../Types/SimpleObject";
import { validate } from "../../helpers/Forms/validate";
import { Input } from "../Input";
import Button from "@mui/material/Button";
import "./form.scss";
import { DropDownMenu } from "../../components/Checkout/PlaceOrder";

interface Props {
  inputNames: string[];
  submitButtonText: string;
  clear?: boolean;
  dropDownMenus?: DropDownMenu;
  setCity?: (currentCountry: string) => void;
  saveDataInStorage?: boolean;
  setPlaceOrderSubmitted?: (placeOrderSubmitted: boolean) => void;
  onPc?: boolean;
  wrap?: boolean;
  setValue?: (value: number) => void;
}

export const Form: FC<Props> = ({
  inputNames,
  submitButtonText,
  clear,
  dropDownMenus,
  saveDataInStorage,
  setPlaceOrderSubmitted,
  setCity,
  onPc,
  wrap,
  setValue,
}) => {
  const initialValues: SimpleObject = inputNames.reduce((acc, inputName) => {
    acc[inputName.toLowerCase()] = "";

    return acc;
  }, {} as SimpleObject);

  const [isHovered, setIsHovered] = useState(false);
  const [inputs, setInputs] = useState<SimpleObject>(initialValues);
  const [errors, setErrors] = useState<SimpleObject>(initialValues);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (saveDataInStorage) {
      const inputsFromStorage = localStorage.getItem("place-order");

      if (
        Object.values(errors).every((error) => !error.length) &&
        inputsFromStorage
      ) {
        setInputs({ ...JSON.parse(inputsFromStorage) });
      }
    }
  }, []);

  useEffect(() => {
    if (inputs.country) {
      setErrors({
        ...errors,
        country: "",
      });
    }

    if (inputs.city) {
      setErrors({
        ...errors,
        city: "",
      });
    }
  }, [inputs.country, inputs.city]);

  const labelsForDropDownMenus = useMemo(() => {
    return dropDownMenus && [...Object.keys(dropDownMenus)];
  }, [dropDownMenus]);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    let newErrors: SimpleObject = {};

    inputNames.forEach((inputName) => {
      const inputValue = inputs[inputName.toLowerCase()];
      const errors = validate(
        inputValue,
        inputName,
        inputName === "Shipping Address2"
      );

      newErrors = {
        ...newErrors,
        ...errors,
      };
    });

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => !!error)) {
      return;
    }

    if (saveDataInStorage) {
      localStorage.setItem("place-order", JSON.stringify(inputs));

      if (setPlaceOrderSubmitted) {
        setPlaceOrderSubmitted(true);
      }
    }

    if (clear) {
      setInputs(initialValues);
      setErrors(initialValues);
    }
  };

  const handleChange = (inputName: string, newValue: string) => {
    setInputs((inputs) => ({
      ...inputs,
      [inputName.toLowerCase()]: newValue,
    }));
    setErrors((errors) => ({
      ...errors,
      [inputName.toLowerCase()]: "",
    }));
  };

  const renderInputs = (inputNames: string[]) => {
    return inputNames.map((inputName) => {
      const currentInputError = errors[inputName.toLowerCase()];
      const currentInput = inputs[inputName.toLowerCase()];

      return (
        <div
          className={cn("form__input-container", {
            "form__input-container--selection":
              labelsForDropDownMenus?.includes(inputName) && dropDownMenus,
          })}
          key={inputName}
        >
          <Input
            inputForPhone={inputName.includes("Phone")}
            value={currentInput}
            placeholder={inputName}
            handleChange={handleChange}
            setInputs={setInputs}
            inputs={inputs}
            errorMessage={currentInputError}
            dropDownMenu={
              labelsForDropDownMenus?.includes(inputName) && dropDownMenus
                ? {
                    [inputName]: dropDownMenus[inputName as "Country" | "City"],
                  }
                : undefined
            }
            setCity={
              labelsForDropDownMenus?.includes(inputName) && dropDownMenus
                ? setCity
                : undefined
            }
          />
        </div>
      );
    });
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      {wrap ? (
        <div className="form__wrap-container">
          {inputNames.map((_value, index) => {
            if (index % 2 === 0) {
              const pair = inputNames.slice(index, index + 2);

              return (
                <div className="form__wrap-container--child">
                  {renderInputs(pair)}
                </div>
              );
            }

            return null;
          })}
        </div>
      ) : (
        renderInputs(inputNames)
      )}

      <div
        className={cn("form__bottom-container", {
          "form__bottom-container--onPc": isLargeScreen,
        })}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "#05c2df",
            width: !onPc && !wrap ? "100%" : "200px",
            height: onPc || wrap ? "50px" : "40px",
          }}
          onClick={() => {
            const inputsFromStorage = localStorage.getItem("place-order");

            console.log("it is working");
            if (inputsFromStorage && setValue) {
              setValue(1);
            }
          }}
        >
          {submitButtonText}
        </Button>

        {onPc && (
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            {isHovered ? (
              <img
                src="icons/back-to-top--hovered.svg"
                alt="Back to top"
                className="form__back-to-top"
              />
            ) : (
              <img
                src="icons/back-to-top.svg"
                alt="Back to top"
                className="form__back-to-top"
              />
            )}
          </div>
        )}
      </div>
    </form>
  );
};
