import { FC } from "react";
import "./whyUs.scss";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Slide } from "../../assets/animations/Slide";
import { Appearance2 } from "../../assets/animations/Appearance2";

const data = [
  {
    title: "Universally compatible",
    text: "KAT Loco offers universal compatibility across all major VR headsets and platforms...",
  },
  {
    title: "VR/PC control panel",
    text: "Our Multifunctional Software allows for quick access to KAT Loco’s control panel both from...",
  },
  {
    title: "wireless sensors",
    text: "What makes it even more advanced, KAT Loco is entirely wireless, and comes with a...",
  },
];

export const WhyUs: FC = () => {
  return (
    <section className="whyUs" id="benefits">
      <div className="whyUs__title-wrapper">
        <Slide direction={SlideDirection.LEFT} onScroll>
          <h2 className="whyUs__title">Why</h2>
        </Slide>
        <Slide direction={SlideDirection.RIGHT} onScroll>
          <h2 className="whyUs__title whyUs__title--blue">Kat loco?</h2>
        </Slide>
      </div>
      {data.map(({ title, text }) => (
        <div className="whyUs__text-container" key={title}>
          <Slide direction={SlideDirection.LEFT} onScroll>
            <h3 className="whyUs__secondary-title">{title}</h3>
          </Slide>
          <Appearance2 onScroll>
            <p className="whyUs__paragraph">{text}</p>
          </Appearance2>
        </div>
      ))}
    </section>
  );
};
