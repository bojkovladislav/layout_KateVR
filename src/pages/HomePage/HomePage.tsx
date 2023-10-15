import { FC, useRef, useState } from "react";
import Button from "@mui/material/Button";
import "./homePage.scss";
import { Appearance } from "../../assets/animations/Appearance";
import { Modal } from "../../assets/Modal";
import { Slide } from "../../assets/animations/Slide";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Appearance2 } from "../../assets/animations/Appearance2";
import { TypingAnimation } from "../../assets/animations/TypingAnimation";
import { Link } from "react-router-dom";
import { Counting } from "../../assets/animations/Counting";

export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="homePage" ref={ref}>
      <Appearance2>
        <img
          src="images/image-phone.png"
          alt="Preview"
          className="homePage__previewImage"
        />
      </Appearance2>

      <div className="homePage__title-container">
        <div>
          <TypingAnimation
            desiredText="THE NEW START OF"
            delay={100}
            initialDelay={0}
            className="homePage__title"
          />
        </div>
        <div>
          <TypingAnimation
            desiredText="VR LOCOMOTION"
            delay={100}
            initialDelay={2000}
            className="homePage__title homePage__title--blue"
          />
        </div>
      </div>

      <Appearance delay={1.2} once>
        <p className="homePage__description">
          Discover the most comprehensive VR Locomotion system, and unlock
          infinite motion in any games on any platforms!
        </p>
      </Appearance>

      <div className="homePage__price-wrapper">
        <Appearance delay={0.5}>
          <h2 className="homePage__price">{<Counting endValue={1200} />}</h2>
        </Appearance>
        <Appearance delay={2.1}>
          <span className="homePage__price">$</span>
        </Appearance>
      </div>

      <Slide direction={SlideDirection.LEFT} delay={2.3}>
        <button onClick={handleModalOpen} className="homePage__play-button">
          <img src="images/play-button.svg" alt="Play button" />
        </button>
      </Slide>

      <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <iframe
          src="https://www.youtube.com/embed/SvTbB19bvIw?showinfo=0"
          width="400"
          height="350"
          allowFullScreen
          frameBorder={0}
          aria-haspopup={false}
        />
      </Modal>

      <Slide direction={SlideDirection.BOTTOM} delay={2.5}>
        <Button
          variant="contained"
          sx={{
            background: "#05c2df",
            width: "100%",
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
      </Slide>
    </div>
  );
};
