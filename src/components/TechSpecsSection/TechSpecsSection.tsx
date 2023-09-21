import { FC, useRef } from "react";
import { ShowSpecsButton } from "../../assets/ShowSpecsButton";
import "./techSpecs.scss";
import { DirectionOfText } from "../../Enums/DirectionOfText";

const showSpecsTexts = [
  {
    text:
      "Weight: 35g/1.23oz each \n" +
      "Dimension: 50mm/1.97in 24mm/0.94in \n" +
      "Light: LED lights",
    direction: DirectionOfText.LEFT,
  },
  {
    text: "Wireless: Bluetooth 4.2 Signal range: 5m Receiver: USB 2.0 and above",
    direction: DirectionOfText.BOTTOM,
  },
  {
    text: "Type: Lthium-lon polymer batteries Capacity: 370mAh Battery life: 10h of continuous use 150 hours on stand by Charging: Fast charging - 1 hour Charging voltage and current: 5V = 0.5A",
    direction: DirectionOfText.BOTTOM,
  },
];

export const TechSpecsSection: FC = () => {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="techSpecs" ref={buttonRef}>
      <div className="techSpecs__title-wrapper">
        <h2 className="techSpecs__title">TECH </h2>
        <h2 className="techSpecs__title techSpecs__title--blue">SPECS </h2>
      </div>

      <div className="techSpecs__container">
        <img src="images/tech-specs.png" alt="Tech specs" />
        {showSpecsTexts.map(({ text, direction }, i) => (
          <div className={`techSpecs__add techSpecs__add--${i + 1}`} key={text}>
            <ShowSpecsButton
              direction={direction}
              text={text}
              buttonRef={buttonRef}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
