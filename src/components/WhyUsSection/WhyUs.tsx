import { FC } from "react";
import "./whyUs.scss";

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
    <section className="whyUs">
      <div className="whyUs__title-wrapper">
        <h2 className="whyUs__title">Why</h2>
        <h2 className="whyUs__title whyUs__title--blue">Kat loco?</h2>
      </div>
      {data.map(({ title, text }) => (
        <div className="whyUs__text-container" key={title}>
          <h3 className="whyUs__secondary-title">{title}</h3>
          <p className="whyUs__paragraph">{text}</p>
        </div>
      ))}
    </section>
  );
};
