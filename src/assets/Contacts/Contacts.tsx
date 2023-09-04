import { FC } from "react";
import "./contacts.scss";

interface Props {
  contactInformation: string[];
}

export const Contacts: FC<Props> = ({ contactInformation }) => {
  return (
    <ul className="contacts">
      {contactInformation.map((contact) => (
        <li key={contact}>
          {contact.charAt(0) === "+" ? (
            <a href="tel:+1234567890" className="contacts__contact">
              {contact}
            </a>
          ) : (
            <a href={`mailto:${contact}`} className="contacts__contact">
              {contact}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};
