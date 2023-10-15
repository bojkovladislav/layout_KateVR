import { FC, useState } from "react";
import { ShowSpecsButton } from "../../assets/ShowSpecsButton";
import "./techSpecs.scss";
import { DirectionOfText } from "../../Enums/DirectionOfText";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Slide } from "../../assets/animations/Slide";
import { Appearance2 } from "../../assets/animations/Appearance2";
import { Appearance } from "../../assets/animations/Appearance";
import { Scale } from "../../assets/animations/Scale";

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
  const [openButtonIndex, setOpenButtonIndex] = useState<number | null>(null);

  const countDelay = (i: number) => {
    if (i === 0) {
      return 0.5;
    } else if (i === 1) {
      return 1;
    } else if (i === 2) {
      return 1.5;
    }
  };

  const handleModalClick = () => {
    setOpenButtonIndex(null);
  };

  return (
    <section className="techSpecs" id="tech">
      <div className="techSpecs__title-wrapper">
        <Slide direction={SlideDirection.LEFT} onScroll>
          <h2 className="techSpecs__title">TECH </h2>
        </Slide>
        <Appearance2 onScroll>
          <h2 className="techSpecs__title techSpecs__title--blue">SPECS </h2>
        </Appearance2>
      </div>

      <div className="techSpecs__container">
        <Scale once onScroll increase>
          <img src="images/tech-specs.png" alt="Tech specs" />
        </Scale>
        {showSpecsTexts.map(({ text, direction }, i) => (
          <div className={`techSpecs__add techSpecs__add--${i + 1}`} key={text}>
            <Appearance onScroll delay={countDelay(i)} once>
              <ShowSpecsButton
                direction={direction}
                text={text}
                isClueOpened={openButtonIndex === i}
                setIsClueOpened={(isOpen) => {
                  setOpenButtonIndex(isOpen ? i : null);
                }}
              />
            </Appearance>
          </div>
        ))}
      </div>

      {openButtonIndex !== null && (
        <div className="modal-overlay" onClick={handleModalClick}></div>
      )}
    </section>
  );
};
