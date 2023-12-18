import { FC, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import cn from "classnames";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { ShowSpecsButton } from "../../assets/ShowSpecsButton";
import "./techSpecs.scss";
import { DirectionOfText } from "../../Enums/DirectionOfText";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Slide } from "../../assets/animations/Slide";
import { Appearance2 } from "../../assets/animations/Appearance2";
import { Appearance } from "../../assets/animations/Appearance";
import { Scale } from "../../assets/animations/Scale";
import { countDelay } from "../../helpers/countDelay";

const showSpecsTexts = [
  {
    title: "SENSOR",
    text:
      "Weight: 35g/1.23oz each \n" +
      "Dimension: 50mm/1.97in 24mm/0.94in \n" +
      "Light: LED lights",
    direction: DirectionOfText.LEFT,
  },
  {
    title: "CONNECTION",
    text: "Wireless: Bluetooth 4.2 Signal range: 5m Receiver: USB 2.0 and above",
    direction: DirectionOfText.BOTTOM,
  },
  {
    title: "BATTERRIES",
    text: "Type: Lthium-lon polymer batteries Capacity: 370mAh Battery life: 10h of continuous use 150 hours on stand by Charging: Fast charging - 1 hour Charging voltage and current: 5V = 0.5A",
    direction: DirectionOfText.BOTTOM,
  },
];

export const TechSpecsSection: FC = () => {
  const [openButtonIndex, setOpenButtonIndex] = useState<number | null>(null);
  const [isInnerLineDrawn, setIsInnerLineDrawn] = useState(false);
  const [areOuterLinesDrawn, setAreOuterLinesDrawn] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const handleModalClick = () => {
    setOpenButtonIndex(null);
  };

  const handleOnEnter = async () => {
    const wait = (delay: number) => {
      return new Promise((resolve) => setTimeout(resolve, delay));
    };

    await wait(500);
    setIsInnerLineDrawn(true);
    await wait(700);
    setAreOuterLinesDrawn(true);
  };

  return (
    <section
      className={cn("techSpecs", { "techSpecs--onPc": isLargeScreen })}
      id="tech"
    >
      <div
        className={cn("techSpecs__title-wrapper", {
          "techSpecs__title-wrapper--onPc": isLargeScreen,
        })}
      >
        <Slide direction={SlideDirection.LEFT} onScroll>
          <h2
            className={cn("techSpecs__title", {
              "techSpecs__title--onPc": isLargeScreen,
            })}
          >
            TECH{" "}
          </h2>
        </Slide>
        <Appearance2 onScroll>
          <h2
            className={cn("techSpecs__title", "techSpecs__title--blue", {
              "techSpecs__title--onPc": isLargeScreen,
            })}
          >
            SPECS{" "}
          </h2>
        </Appearance2>
      </div>

      <div className="techSpecs__container">
        <Scale once onScroll increase>
          <img
            src="images/tech-specs.svg"
            alt="Tech specs"
            className={cn("techSpecs__product", {
              "techSpecs__product--onPc": isLargeScreen,
            })}
          />
        </Scale>

        {showSpecsTexts.map(({ text, direction, title }, i) => (
          <div
            className={cn("techSpecs__add", `techSpecs__add--${i + 1}`, {
              [`techSpecs__add--${i + 1}--onPc`]: isLargeScreen,
            })}
            key={text}
          >
            {!isLargeScreen ? (
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
            ) : (
              <div className="techSpecs__description-container">
                <Appearance delay={2} onScroll once>
                  <h3 className="techSpecs__description-title">{title}</h3>
                </Appearance>
                <Appearance2 delay={2.3} onScroll once>
                  <p className="techSpecs__description-paragraph">{text}</p>
                </Appearance2>
              </div>
            )}
          </div>
        ))}
        {isLargeScreen && (
          <Parallax
            onEnter={handleOnEnter}
            style={{ position: "absolute", top: 0 }}
          >
            {isInnerLineDrawn && (
              <div className="techSpecs__stroke techSpecs__stroke--inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="203"
                  viewBox="0 0 46 203"
                  fill="none"
                >
                  <motion.path
                    d="M45.0833 1.10275C19.5825 26.1061 3.03001 60.4075 1.05524 98.9178C-0.947637 137.976 12.4095 174.262 35.8274 201.892"
                    stroke="#05C2DF"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </div>
            )}
            {areOuterLinesDrawn && (
              <Appearance>
                <div className="techSpecs__stroke techSpecs__stroke--bottom-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="134"
                    height="114"
                    viewBox="0 0 134 114"
                    fill="none"
                  >
                    <motion.path
                      d="M3 110.5H41V3.5H130"
                      stroke="#05C2DF"
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ pathLength: 1, pathOffset: 0 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.path
                      d="M6.04102 110.5C6.04102 112.157 4.69787 113.5 3.04102 113.5C1.38416 113.5 0.0410156 112.157 0.0410156 110.5C0.0410156 108.843 1.38416 107.5 3.04102 107.5C4.69787 107.5 6.04102 108.843 6.04102 110.5Z"
                      fill="#05C2DF"
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ pathLength: 1, pathOffset: 0 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.path
                      d="M133.958 3.5C133.958 5.15685 132.615 6.5 130.958 6.5C129.301 6.5 127.958 5.15685 127.958 3.5C127.958 1.84315 129.301 0.5 130.958 0.5C132.615 0.5 133.958 1.84315 133.958 3.5Z"
                      fill="#05C2DF"
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ pathLength: 1, pathOffset: 0 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                </div>
                <div className="techSpecs__stroke techSpecs__stroke--top">
                  <svg
                    width="404"
                    height="72"
                    viewBox="0 0 404 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M4.5 3H403V72"
                      stroke="#05C2DF"
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ pathLength: 1, pathOffset: 0 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />

                    <circle cx="3" cy="3" r="3" fill="#05C2DF" />
                  </svg>
                </div>
                <div className="techSpecs__stroke techSpecs__stroke--right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="245"
                    viewBox="0 0 192 245"
                    fill="none"
                  >
                    <motion.path
                      d="M188.5 1.5V242H3.5"
                      stroke="#05C2DF"
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ pathLength: 1, pathOffset: 0 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.path
                      d="M191.5 3.04148C191.5 4.69833 190.157 6.04148 188.5 6.04148C186.843 6.04148 185.5 4.69833 185.5 3.04148C185.5 1.38462 186.843 0.0414792 188.5 0.0414792C190.157 0.0414792 191.5 1.38462 191.5 3.04148Z"
                      fill="#05C2DF"
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ pathLength: 1, pathOffset: 0 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                    <circle cx="3" cy="242" r="3" fill="#05C2DF" />
                  </svg>
                </div>
              </Appearance>
            )}
          </Parallax>
        )}
      </div>

      {openButtonIndex !== null && (
        <div className="modal-overlay" onClick={handleModalClick}></div>
      )}
    </section>
  );
};
