import { FC, useState } from "react";
import Slider from "react-slick";
import { Modal } from "../../assets/Modal";
import "./aboutSection.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Appearance } from "../../assets/animations/Appearance";

export const AboutSection: FC = () => {
  const [isModalOpen, setIsMenuOpened] = useState(false);

  const handleModalOpen = () => setIsMenuOpened(true);
  const handleModalClose = () => setIsMenuOpened(false);

  const images = [
    "images/carousel-image-1.jpg",
    "images/carousel-image-2.jpg",
    "images/carousel-image-3.jpg",
    "images/carousel-image-4.jpg",
    "images/carousel-image-5.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="aboutSection">
      <Appearance onScroll delay={0.3}>
        <span className="aboutSection__title">ABOUT </span>
      </Appearance>
      <Appearance onScroll delay={0.7}>
        <span className="aboutSection__title aboutSection__title--blue">
          PRODUCT
        </span>
      </Appearance>

      <div className="aboutSection__carousel">
        <Slider {...settings}>
          {images.map((image, i) => (
            <img
              src={image}
              alt="carousel image"
              className="aboutSection__carousel-image"
              key={i}
            />
          ))}
        </Slider>
      </div>

      <p className="aboutSection__paragraph">
        KAT loco is a foot-based VR locomotion system that gives complete
        physical control over lower-body actions, allowing you to freely walk,
        run, and carry out just any other movement in virtual reality.
      </p>

      <button onClick={handleModalOpen} className="aboutSection__play-button">
        <img
          src="images/play-button.svg"
          alt="Play button"
          className="aboutSection__play-image"
        />
      </button>

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

      <h3 className="aboutSection__pre-title">Hello,</h3>
      <div className="aboutSection__title-wrapper">
        <h2 className="aboutSection__title">NICE TO MEET </h2>
        <h2 className="aboutSection__title aboutSection__title--blue">YOU!</h2>
      </div>

      <p className="aboutSection__paragraph">
        KAT VR is an independent company dedicated to the research, development,
        and sales of VR Locomotion products and solutions. Founded in 2013, we
        have quickly grown to become one of the world’s leading professional
        suppliers of VR games’ & simulations’ equipment
      </p>
    </section>
  );
};
