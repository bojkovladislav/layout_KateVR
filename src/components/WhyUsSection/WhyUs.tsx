import { FC, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import cn from "classnames";
import Button from "@mui/material/Button";
import { Parallax } from "react-scroll-parallax";
import "./whyUs.scss";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Slide } from "../../assets/animations/Slide";
import { Appearance2 } from "../../assets/animations/Appearance2";
import { WhyUsAnimatedIcon } from "../../assets/WhyUsAnimatedIcon";
import { Link } from "react-router-dom";
import { Appearance } from "../../assets/animations/Appearance";

const data = [
  {
    title: "Universally compatible",
    text: "KAT Loco offers universal compatibility across all major VR headsets and platforms allowing you to play any VR game with support for Free Locomotion",
  },
  {
    title: "VR/PC control panel",
    text: "Our Multifunctional Software allows for quick access to KAT Loco’s control panel both from a computer desktop, and directly from your VR headset.",
  },
  {
    title: "wireless sensors",
    text: "What makes it even more advanced, KAT Loco is entirely wireless, and comes with a complete system of algorithms, super durable batteries and more!",
  },
];

export const WhyUs: FC = () => {
  const [drawSVG, setDrawSVG] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <section
      className={cn("whyUs", { "whyUs--onPc": isLargeScreen })}
      id="benefits"
    >
      <div className="whyUs__title-wrapper">
        <Slide direction={SlideDirection.LEFT} onScroll>
          <h2
            className={cn("whyUs__title", {
              "whyUs__title--onPc": isLargeScreen,
            })}
          >
            Why
          </h2>
        </Slide>
        <Slide direction={SlideDirection.RIGHT} onScroll>
          <h2
            className={cn("whyUs__title", "whyUs__title--blue", {
              "whyUs__title--onPc": isLargeScreen,
            })}
          >
            Kat loco?
          </h2>
        </Slide>
      </div>
      <div
        className={cn("whyUs__cons", { "whyUs__cons--onPc": isLargeScreen })}
      >
        {data.map(({ title, text }, index) => (
          <div className="whyUs__text-outer-container">
            <Parallax onEnter={() => setDrawSVG(true)}>
              {drawSVG && isLargeScreen && (
                <WhyUsAnimatedIcon currentIndex={index} key={index} />
              )}
            </Parallax>
            <div className="whyUs__text-container" key={title}>
              {isLargeScreen ? (
                <Appearance onScroll once delay={1.5}>
                  <h3
                    className={cn("whyUs__secondary-title", {
                      "whyUs__secondary-title--onPc": isLargeScreen,
                    })}
                  >
                    {title}
                  </h3>
                </Appearance>
              ) : (
                <Slide direction={SlideDirection.LEFT} onScroll>
                  <h3
                    className={cn("whyUs__secondary-title", {
                      "whyUs__secondary-title--onPc": isLargeScreen,
                    })}
                  >
                    {title}
                  </h3>
                </Slide>
              )}
              {!isLargeScreen ? (
                <Appearance2 onScroll>
                  <p
                    className={cn("whyUs__paragraph", {
                      "whyUs__paragraph--onPc": isLargeScreen,
                    })}
                  >
                    {text}
                  </p>
                </Appearance2>
              ) : (
                <Appearance2 onScroll once delay={1.7}>
                  <p
                    className={cn("whyUs__paragraph", {
                      "whyUs__paragraph--onPc": isLargeScreen,
                    })}
                  >
                    {text}
                  </p>
                </Appearance2>
              )}
            </div>
          </div>
        ))}
      </div>

      <Appearance once onScroll delay={2}>
        <Button
          variant="contained"
          sx={{
            background: "#05c2df",
            width: "200px",
            padding: 0,
          }}
        >
          <Link
            to="/checkout"
            style={{
              width: "100%",
              height: "100%",
              display: "inline-block",
              padding: "5px",
            }}
          >
            Buy now
          </Link>
        </Button>
      </Appearance>
    </section>
  );
};
