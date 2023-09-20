import { FC, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Button from "@mui/material/Button";
import "./homePage.scss";
import { Appearance } from "../../assets/animations/Appearance";
import { Modal } from "../../assets/Modal";
import { Slide } from "../../assets/animations/Slide";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Appearance2 } from "../../assets/animations/Appearance2";

export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // animation related stuff
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 1200, { duration: 2 });

    return controls.stop;
  });

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

      <Slide direction={SlideDirection.LEFT} delay={0.5}>
        <h1 className="homePage__title">THE NEW START OF</h1>
      </Slide>

      <Slide direction={SlideDirection.LEFT} delay={0.7}>
        <h1 className="homePage__title homePage__title--blue">VR LOCOMOTION</h1>
      </Slide>

      <Appearance delay={1.2}>
        <p className="homePage__description">
          Discover the most comprehensive VR Locomotion system, and unlock
          infinite motion in any games on any platforms!
        </p>
      </Appearance>

      <div className="homePage__price-wrapper">
        <Appearance>
          <motion.h2 className="homePage__price">{rounded}</motion.h2>
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
          sx={{ background: "#05c2df", width: "100%" }}
        >
          Buy now
        </Button>
      </Slide>
    </div>
  );
};
