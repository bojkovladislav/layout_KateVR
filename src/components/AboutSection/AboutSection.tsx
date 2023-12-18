import { FC, useState } from "react";
import Slider from "react-slick";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Modal } from "../../assets/Modal";
import "./aboutSection.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Appearance } from "../../assets/animations/Appearance";
import { Appearance2 } from "../../assets/animations/Appearance2";
import { SlideDirection } from "../../Enums/SlideDirection";
import { Slide } from "../../assets/animations/Slide";
import cn from "classnames";
import { countDelay } from "../../helpers/countDelay";

export const AboutSection: FC = () => {
  const [isModalOpen, setIsMenuOpened] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [currentSlide, setCurrentSlide] = useState(1);

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
    <section
      className={cn("aboutSection", { "aboutSection--onPc": isLargeScreen })}
      id="about"
    >
      <div
        className={cn("aboutSection__top-container", {
          "aboutSection__top-container--onPc": isLargeScreen,
        })}
      >
        {isLargeScreen && (
          <div className="aboutSection__carousel--onPc">
            <p className="aboutSection__currentSlide">{`${currentSlide}/${images.length}`}</p>
            <Slider
              {...settings}
              beforeChange={(_currentSlide, nextSlide) =>
                setCurrentSlide(nextSlide + 1)
              }
            >
              {images.map((image, i) => (
                <img
                  src={image}
                  alt="carousel image"
                  className="aboutSection__carousel-image--onPc"
                  key={i}
                />
              ))}
            </Slider>
          </div>
        )}

        <div
          className={cn("aboutSection__top-inner-container", {
            "aboutSection__top-inner-container--onPc": isLargeScreen,
          })}
        >
          <div
            className={cn("aboutSection__title-container", {
              "aboutSection__title-container--onPc": isLargeScreen,
            })}
          >
            <Appearance onScroll delay={0.3}>
              <span
                className={cn("aboutSection__title", {
                  "aboutSection__title--onPc": isLargeScreen,
                })}
              >
                ABOUT{" "}
              </span>
            </Appearance>
            <Appearance onScroll delay={0.7}>
              <span
                className={cn(
                  "aboutSection__title",
                  "aboutSection__title--blue",
                  { "aboutSection__title--onPc": isLargeScreen }
                )}
              >
                PRODUCT
              </span>
            </Appearance>
          </div>
          {!isLargeScreen && (
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
          )}
          <Appearance2 onScroll>
            <p
              className={cn("aboutSection__paragraph", {
                "aboutSection__paragraph--onPc": isLargeScreen,
              })}
            >
              KAT loco is a foot-based VR locomotion system that gives complete
              physical control over lower-body actions, allowing you to freely
              walk, run, and carry out just any other movement in virtual
              reality.
            </p>
          </Appearance2>
          <button
            onClick={handleModalOpen}
            className="aboutSection__play-button"
          >
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
        </div>
      </div>

      <div
        className={cn("aboutSection__bottom-container", {
          "aboutSection__bottom-container--onPc": isLargeScreen,
        })}
      >
        <div className="aboutSection__bottom-inner-container">
          <Appearance onScroll>
            <h3 className="aboutSection__pre-title">Hello,</h3>
          </Appearance>
          <div className="aboutSection__title-wrapper">
            <Slide direction={SlideDirection.LEFT} onScroll>
              <h2
                className={cn("aboutSection__title", {
                  "aboutSection__title--onPc": isLargeScreen,
                })}
              >
                NICE TO MEET{" "}
              </h2>
            </Slide>
            <h2
              className={cn(
                "aboutSection__title",
                "aboutSection__title--blue",
                {
                  "aboutSection__title--onPc": isLargeScreen,
                }
              )}
            >
              YOU!
            </h2>
          </div>
          <Appearance2 onScroll>
            <p
              className={cn("aboutSection__paragraph", {
                "aboutSection__paragraph--onPc-bottom": isLargeScreen,
              })}
            >
              KAT VR is an independent company dedicated to the research,
              development, and sales of VR Locomotion products and solutions.
              Founded in 2013, we have quickly grown to become one of the
              world’s leading professional suppliers of VR games’ & simulations’
              equipment
            </p>
          </Appearance2>
        </div>

        {isLargeScreen && (
          <div className="aboutSection__rotated-titles">
            {[6, 5, 4, 3, 2, 1].map((index) => (
              <Slide
                key={index}
                direction={SlideDirection.RIGHT}
                delay={countDelay(index, 0.07)}
                onScroll
              >
                <img
                  src="images/about-us.png"
                  alt="About us"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? 180 : 0}deg)`,
                    opacity: index !== 6 ? 1 - (1 - Number(`0.${index}`)) : 1,
                  }}
                />
              </Slide>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
