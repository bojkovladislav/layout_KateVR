import { FC, FormEvent, useState, useMemo, useEffect } from "react";
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
}

export const Form: FC<Props> = ({
  inputNames,
  submitButtonText,
  clear,
  dropDownMenus,
  saveDataInStorage,
  setPlaceOrderSubmitted,
  setCity,
}) => {
  const initialValues: SimpleObject = inputNames.reduce((acc, inputName) => {
    acc[inputName.toLowerCase()] = "";

    return acc;
  }, {} as SimpleObject);

  const [inputs, setInputs] = useState<SimpleObject>(initialValues);
  const [errors, setErrors] = useState<SimpleObject>(initialValues);

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

  return (
    <form className="form" onSubmit={onFormSubmit}>
      {inputNames.map((inputName) => {
        const currentInputError = errors[inputName.toLowerCase()];
        const currentInput = inputs[inputName.toLowerCase()];

        return (
          <div className="form__input-container" key={inputName}>
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
                      [inputName]:
                        dropDownMenus[inputName as "Country" | "City"],
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
      })}

      <Button
        type="submit"
        variant="contained"
        sx={{ background: "#05c2df", width: "100%" }}
      >
        {submitButtonText}
      </Button>
    </form>
  );
};
