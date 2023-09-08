import { FC, useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Button from "@mui/material/Button";
import "./homePage.scss";
import { SlideFromLeft } from "../../assets/animations/SlideFromLeft";
import { Appearance } from "../../assets/animations/Appearance";
import { Modal } from "../../assets/Modal";
import { SlideFromBottom } from "../../assets/animations/SlideFromBottom";

export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // animation related stuff
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 1200, { duration: 2 });

    return controls.stop;
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="homePage" ref={ref}>
      <motion.img
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="homePage__previewImage"
        src="images/image-phone.png"
        alt="Preview"
      />

      <SlideFromLeft delay={0.5}>
        <h1 className="homePage__title">THE NEW START OF</h1>
      </SlideFromLeft>

      <SlideFromLeft delay={0.7}>
        <h1 className="homePage__title homePage__title--blue">VR LOCOMOTION</h1>
      </SlideFromLeft>

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

      <SlideFromLeft delay={2.3}>
        <button onClick={handleModalOpen} className="homePage__play-button">
          <img src="images/play-button.svg" alt="Play button" />
        </button>
      </SlideFromLeft>

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

      <SlideFromBottom delay={2.5}>
        <Button
          variant="contained"
          sx={{ background: "#05c2df", width: "100%" }}
        >
          Buy now
        </Button>
      </SlideFromBottom>
    </div>
  );
};
