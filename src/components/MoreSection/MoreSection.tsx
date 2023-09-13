import { FC } from "react";
import "./moreSection.scss";
import { Slide } from "../../assets/animations/Slide";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Appearance } from "../../assets/animations/Appearance";

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
      <div className="moreSection__title-wrapper">
        <Slide direction={SlideDirection.LEFT} onScroll>
          <h2 className="moreSection__title">MORE THAN </h2>
        </Slide>
        <Slide direction={SlideDirection.RIGHT} onScroll>
          <h2 className="moreSection__title moreSection__title--blue">
            GAMING!
          </h2>
        </Slide>
      </div>

      <p className="moreSection__second-title">
        This also made for people who are interested in...
      </p>

      <div className="moreSection__benefits">
        {benefits.map(({ name, description }) => (
          <div className="moreSection__benefit" key={name}>
            <Slide direction={SlideDirection.LEFT} onScroll>
              <h3 className="moreSection__benefit-name">{name}</h3>
            </Slide>

            <Appearance increase onScroll>
              <p className="moreSection__benefit-description">{description}</p>
            </Appearance>
          </div>
        ))}
      </div>
    </section>
  );
};
