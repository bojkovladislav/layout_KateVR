import { FC } from "react";
import { Link } from "react-router-dom";
import "./help.scss";

const links = [
  "Instruction manual",
  "Where to go for a warranty",
  "Service policy",
];

const contacts = [
  "+86-0571-86105373",
  "global@katvr.com",
  "overseas@katvr.com",
];

export const Help: FC = () => {
  return (
    <section className="help">
      <div className="help__title-wrapper">
        <h2 className="help__title help__title">HOW CAN WE</h2>
        <h2 className="help__title help__title-blue">HELP</h2>
        <h2 className="help__title help__title">YOU?</h2>
      </div>

      <p className="help__paragraph">
        Welcome to our help center. Our goal is to make the process of getting
        acquainted and purchase as easy and pleasant as possible. Need help with
        your KAT VR loco product? Many product questions can be resolved by
        reviewing our Product Support{" "}
        <Link to="/faq" className="help__link">
          FAQs
        </Link>
        .
      </p>

      <p className="help__paragraph">
        Please also feel free{" "}
        <Link to="/contacts" className="help__link">
          to Contact Us
        </Link>{" "}
        directly should you need anything further. We’re happy to help.
      </p>

      <div className="help__link-container">
        {links.map((link) => (
          <Link to="/" className="help__link" key={link}>
            {link}
          </Link>
        ))}
      </div>

      <div className="help__contact-info">
        {contacts.map((contact) => (
          <p className="help__paragraph" key={contact}>
            {contact}
          </p>
        ))}
      </div>
    </section>
  );
};
