import { FC } from "react";
import "./getInTouch.scss";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Slide } from "../../assets/animations/Slide";
import { Appearance } from "../../assets/animations/Appearance";
import { Form } from "../../assets/Form";

const inputNames = ["Name", "Email", "Phone", "Message"];

export const GetInTouch: FC = () => {
  return (
    <section className="getInTouch" id="contact">
      <p className="getInTouch__second-title">Have any questions?</p>
      <div className="getInTouch__title-wrapper">
        <Slide direction={SlideDirection.LEFT} onScroll>
          <h2 className="getInTouch__title">GET IN</h2>
        </Slide>
        <Appearance onScroll delay={0.4}>
          <h2 className="getInTouch__title getInTouch__title--blue">TOUCH</h2>
        </Appearance>
      </div>

      <Form inputNames={inputNames} submitButtonText="Contact us" clear />

      <p className="getInTouch__paragraph">
        Our manager will reply you within 15 minutes
      </p>
    </section>
  );
};
