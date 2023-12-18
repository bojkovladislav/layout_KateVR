import { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import cn from "classnames";
import "./getInTouch.scss";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Slide } from "../../assets/animations/Slide";
import { Appearance } from "../../assets/animations/Appearance";
import { Form } from "../../assets/Form";
import { Contacts } from "../../assets/Contacts";

const inputNames = ["Name", "Email", "Phone", "Message"];
const contactInformation = [
  "+86-0571-86105373",
  "global@katvr.com",
  "overseas@katvr.com",
];

export const GetInTouch: FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <section
      className={cn("getInTouch", { "getInTouch--onPc": isLargeScreen })}
      id="contact"
    >
      <div className="getInTouch__left-container">
        <p className="getInTouch__second-title">Have any questions?</p>
        <div className="getInTouch__title-wrapper">
          <Slide direction={SlideDirection.LEFT} onScroll>
            <h2
              className={cn("getInTouch__title", {
                "getInTouch__title--onPc": isLargeScreen,
              })}
            >
              GET IN
            </h2>
          </Slide>
          <Appearance onScroll delay={0.4}>
            <h2
              className={cn("getInTouch__title", "getInTouch__title--blue", {
                "getInTouch__title--onPc": isLargeScreen,
              })}
            >
              TOUCH
            </h2>
          </Appearance>
        </div>

        {isLargeScreen && (
          <p className="getInTouch__paragraph getInTouch__paragraph--onPc">
            Our manager will reply you within 15 minutes
          </p>
        )}

        {isLargeScreen && <Contacts contactInformation={contactInformation} />}
      </div>

      <div
        className={cn("getInTouch-right-container", {
          "getInTouch-right-container--onPc": isLargeScreen,
        })}
      >
        <Form
          inputNames={inputNames}
          submitButtonText="Contact us"
          clear
          onPc={isLargeScreen}
        />
      </div>

      {!isLargeScreen && (
        <p className="getInTouch__paragraph">
          Our manager will reply you within 15 minutes
        </p>
      )}
    </section>
  );
};
