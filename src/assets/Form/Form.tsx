import { FC, FormEvent, useState } from "react";
import { SimpleObject } from "../../Types/SimpleObject";
import { validate } from "../../helpers/Forms/validate";
import { Input } from "../Input";
import Button from "@mui/material/Button";
import "./form.scss";

interface Props {
  inputNames: string[];
  submitButtonText: string;
  clear?: boolean;
}

export const Form: FC<Props> = ({ inputNames, submitButtonText, clear }) => {
  const initialValues: SimpleObject = inputNames.reduce((acc, inputName) => {
    acc[inputName.toLowerCase()] = "";

    return acc;
  }, {} as SimpleObject);

  const [inputs, setInputs] = useState<SimpleObject>(initialValues);
  const [errors, setErrors] = useState<SimpleObject>(initialValues);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    let newErrors: SimpleObject = {};

    inputNames.forEach((inputName) => {
      const inputValue = inputs[inputName.toLowerCase()];
      const errors = validate(inputValue, inputName);

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
