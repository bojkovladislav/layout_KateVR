import { FC } from "react";
import "./moreSection.scss";

const benefits = [
  {
    name: "EDUCATION",
    description:
      "Create aducational simulations, trainings and much more with...",
  },
  {
    name: "REAL ESTATE",
    description:
      "Desighn architectural projects in a deeply realistic environment...",
  },
  {
    name: "FITNESS",
    description:
      "Combine business with pleasure, and discover countless ways...",
  },
  {
    name: "SOCIAL INTERACTIONS",
    description:
      "Hang out with your friends in the virtual world when you can’t...",
  },
];

export const MoreSection: FC = () => {
  return (
    <section className="moreSection">
      <span className="moreSection__title">MORE THAN </span>
      <span className="moreSection__title moreSection__title--blue">
        GAMING!
      </span>

      <p className="moreSection__second-title">
        This also made for people who are interested in...
      </p>

      <div className="moreSection__benefits">
        {benefits.map(({ name, description }) => (
          <div className="moreSection__benefit">
            <h3 className="moreSection__benefit-name">{name}</h3>

            <p className="moreSection__benefit-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
