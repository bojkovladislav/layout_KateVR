import { FC, useState } from "react";
import "./getInTouch.scss";
import Button from "@mui/material/Button";
import cn from "classnames";

const inputs = ["Name", "Email", "Phone"];

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
    }
  };

  return (
    <section className="getInTouch">
      <p className="getInTouch__second-title">Have any questions?</p>
      <div className="getInTouch__title-wrapper">
        <h2 className="getInTouch__title">GET IN</h2>
        <h2 className="getInTouch__title getInTouch__title--blue">TOUCH</h2>
      </div>

      <form
        action="POST"
        className="getInTouch__form"
        onSubmit={(e) => {
          e.preventDefault();

          if (
            !name.length ||
            !email.length ||
            !phone.length ||
            !message.length
          ) {
            setErrors((errors) => ({
              ...errors,
              name: !name.length ? "Name field is required" : "",
              email: !email.length ? "Email field is required" : "",
              phone: !phone.length ? "Phone field is required" : "",
              message: !message.length ? "Message field is required" : "",
            }));
            return;
          }

          if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            setErrors((errors) => ({
              ...errors,
              email: "Email is invalid! Pattern: example@test.com",
            }));
            return;
          }

          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setErrors({ name: "", email: "", phone: "", message: "" });
        }}
      >
        <div className="getInTouch__inputs-container">
          {inputs.map((placeholder) => {
            const currentInputError = errors[placeholder.toLowerCase()];

            return (
              <div className="getInTouch__input-container" key={placeholder}>
                <input
                  className={cn("getInTouch__input", {
                    "getInTouch__input--red-border": currentInputError.length,
                  })}
                  value={getCorrectValue(placeholder)}
                  onChange={(e) => {
                    setErrors((errors) => ({
                      ...errors,
                      name: placeholder === "Name" ? "" : errors.name,
                      email: placeholder === "Email" ? "" : errors.email,
                      phone: placeholder === "Phone" ? "" : errors.phone,
                    }));
                    setCorrectValue(placeholder, e.target.value);
                  }}
                  key={placeholder}
                  type={placeholder === "Phone" ? "number" : ""}
                  placeholder={placeholder}
                />

                {!!currentInputError.length && (
                  <p className="getInTouch__error">{currentInputError}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="getInTouch__input-container">
          <textarea
            className="getInTouch__input getInTouch__message"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setErrors((errors) => ({ ...errors, message: "" }));
              setMessage(e.target.value);
            }}
          />

          {!!errors.message.length && (
            <p className="getInTouch__error">{errors.message}</p>
          )}
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
