import { FC, FormEvent, useState, useMemo } from "react";
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
}

export const Form: FC<Props> = ({
  inputNames,
  submitButtonText,
  clear,
  dropDownMenus,
  setCity,
}) => {
  const initialValues: SimpleObject = inputNames.reduce((acc, inputName) => {
    acc[inputName.toLowerCase()] = "";

    return acc;
  }, {} as SimpleObject);

  const [inputs, setInputs] = useState<SimpleObject>(initialValues);
  const [errors, setErrors] = useState<SimpleObject>(initialValues);

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
