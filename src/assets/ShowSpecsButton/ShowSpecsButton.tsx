import { FC, useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import cn from "classnames";
import { useAnimation } from "framer-motion";
import "./showSpecButton.scss";
import { Appearance2 } from "../animations/Appearance2";
import { DirectionOfText } from "../../Enums/DirectionOfText";

interface Props {
  text: string;
  direction: DirectionOfText;
  buttonRef?: React.RefObject<HTMLDivElement>;
}

//! MUST READ
// this was made for mobile version
// so all clickable events should be replaced with hovering
// in desktop version

export const ShowSpecsButton: FC<Props> = ({ text, direction, buttonRef }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      opacity: 1,
      y: 0,
      x: direction === DirectionOfText.LEFT ? "-120px" : 0,
    });
  };

  const endAnimation = () => {
    controls.start({
      opacity: 0,
      ...getCoords(),
    });
  };

  useEffect(() => {
    if (!buttonRef || !buttonRef.current) return;
    const techSpecsSection = buttonRef?.current;

    const handleDocumentClick = () => {
      endAnimation();
      setIsButtonClicked(false);
    };

    techSpecsSection.addEventListener("click", handleDocumentClick);

    return () => {
      techSpecsSection &&
        techSpecsSection.removeEventListener("click", handleDocumentClick);
    };
  }, [buttonRef]);

  const getCoords = () => {
    switch (direction) {
      case DirectionOfText.LEFT:
        return { x: -140, y: 0 };
      case DirectionOfText.RIGHT:
        return { x: 20, y: 0 };
      case DirectionOfText.BOTTOM:
        return { x: 0, y: 20 };
    }
  };

  const handleMouseClick = () => {
    setIsButtonClicked(!isButtonClicked);

    if (!isButtonClicked) {
      startAnimation();
    } else {
      endAnimation();
    }
  };

  return (
    <div
      className={cn("buttonContainer", {
        "buttonContainer--bottom": direction === DirectionOfText.BOTTOM,
        "buttonContainer--left": direction === DirectionOfText.LEFT,
      })}
    >
      <div className="buttonContainer__button">
        <Fab
          onClick={handleMouseClick}
          aria-label="add"
          size="small"
          color="primary"
          sx={{ backgroundColor: "#05C2DF" }}
        >
          {isButtonClicked ? <RemoveIcon /> : <AddIcon />}
        </Fab>
      </div>

      <div className="buttonContainer__text-wrapper">
        <Appearance2
          initial={{
            opacity: 0,
            ...getCoords(),
          }}
          controls={controls}
        >
          <p className="buttonContainer__text">{text}</p>
        </Appearance2>
      </div>
    </div>
  );
};
