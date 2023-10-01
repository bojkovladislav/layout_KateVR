import { FC, useEffect, useState } from "react";

interface Props {
  delay: number;
  desiredText: string;
  initialDelay: number;
  className?: string;
}

export const TypingAnimation: FC<Props> = ({
  delay,
  desiredText,
  className,
  initialDelay,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isCursor, setIsCursor] = useState(false);
  const [isDelayGone, setIsDelayGone] = useState(false);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setIsDelayGone(true);
    }, initialDelay);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, [initialDelay]);

  useEffect(() => {
    if (isDelayGone) {
      const innerTimeout = setTimeout(() => {
        if (currentIndex < desiredText.length) {
          setText((prevText) => prevText + desiredText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setIsCursor(true);
        } else {
          setIsCursor(false);
        }
      }, delay);

      return () => {
        clearTimeout(innerTimeout);
      };
    }
  }, [delay, currentIndex, isCursor, desiredText, isDelayGone]);

  return (
    <span className={className}>
      {text}
      {isCursor && "|"}
    </span>
  );
};
