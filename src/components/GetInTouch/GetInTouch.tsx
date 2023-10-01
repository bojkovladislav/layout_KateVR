import { FC, useState, FormEvent } from "react";
import Button from "@mui/material/Button";
import "./getInTouch.scss";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Slide } from "../../assets/animations/Slide";
import { Appearance } from "../../assets/animations/Appearance";
import { Input } from "../../assets/Input";

const inputs = ["Name", "Email", "Phone", "Message"];

type Errors = {
  [key: string]: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const GetInTouch: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const setCorrectValue = (placeholder: string, value: string) => {
    switch (placeholder) {
      case "Name":
        setName(value);
        break;
      case "Email":
        setEmail(value);
        break;
      case "Phone":
        setPhone(value);
        break;
      case "Message":
        setMessage(value);
    }
  };

  const getCorrectValue = (placeholder: string) => {
    switch (placeholder) {
      case "Name":
        return name;
      case "Email":
        return email;
      case "Phone":
        return phone;
      case "Message":
        return message;
    }
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Initialize an object to track errors
    const newErrors: Errors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!name.trim()) {
      newErrors.name = "Name field is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email field is required";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      newErrors.email = "Email is invalid! Pattern: example@test.com";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone field is required";
    } else if (phone.trim().replace(/ /g, "").length < 7) {
      newErrors.phone = "Phone length should not be less than 7 symbols";
    } else if (phone.trim().replace(/ /g, "").length > 15) {
      newErrors.phone = "Phone length should not be more than 15 symbols";
    }

    if (!message.trim()) {
      newErrors.message = "Message field is required";
    } else if (message.trim().length < 15) {
      newErrors.message = "Your message should be at least 15 characters";
    }

    setErrors(newErrors);

    if (
      newErrors.email ||
      newErrors.message ||
      newErrors.name ||
      newErrors.phone
    ) {
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (placeholder: string, newValue: string) => {
    setCorrectValue(placeholder, newValue);
    setErrors((errors) => ({
      ...errors,
      name: placeholder === "Name" ? "" : errors.name,
      email: placeholder === "Email" ? "" : errors.email,
      phone: placeholder === "Phone" ? "" : errors.phone,
      message: placeholder === "Message" ? "" : errors.message,
    }));
  };

  return (
    <section className="getInTouch" id="contact">
      <p className="getInTouch__second-title">Have any questions?</p>
      <div className="getInTouch__title-wrapper">
        <Slide direction={SlideDirection.LEFT} onScroll>
          <h2 className="getInTouch__title">GET IN</h2>
        </Slide>
        <Appearance onScroll delay={0.4}>
          <h2 className="getInTouch__title getInTouch__title--blue">TOUCH</h2>
        </Appearance>
      </div>

      <form
        action="POST"
        className="getInTouch__form"
        onSubmit={(e) => onFormSubmit(e)}
      >
        <div className="getInTouch__inputs-container">
          {inputs.map((placeholder) => {
            const currentInputError = errors[placeholder.toLowerCase()];

            return (
              <div className="getInTouch__input-container" key={placeholder}>
                {placeholder === "Phone" ? (
                  <Input
                    value={phone}
                    placeholder="Phone number"
                    isError={!!errors.phone.length}
                    handleChangePhone={(newValue: string) =>
                      handleChange(placeholder, newValue)
                    }
                    errorMessage={errors.phone}
                    inputForPhone
                  />
                ) : (
                  <Input
                    value={getCorrectValue(placeholder) || ""}
                    placeholder={placeholder}
                    isError={!!currentInputError.length}
                    handleChange={(
                      newValue: React.ChangeEvent<HTMLInputElement>
                    ) => handleChange(placeholder, newValue.target.value)}
                    errorMessage={currentInputError}
                  />
                )}
              </div>
            );
          })}
        </div>

        <Button
          type="submit"
          variant="contained"
          sx={{ background: "#05c2df", width: "100%" }}
        >
          Contact Us
        </Button>

        <p className="getInTouch__paragraph">
          Our manager will reply you within 15 minutes
        </p>
      </form>
    </section>
  );
};
