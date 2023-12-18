import { FC, useState } from "react";
import "./qa.scss";
import { motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";
import cn from "classnames";

interface Props {
  question: string;
  answer: string;
  date: string;
}

export const QA: FC<Props> = ({ question, answer, date }) => {
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  const [ref, { height }] = useMeasure();

  const handleClick = () => setIsQuestionClicked(!isQuestionClicked);

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <div
        className={cn("qa", { "qa--gap": isQuestionClicked })}
        onClick={handleClick}
      >
        <div className="qa__container">
          <h3 className="qa__question">{question}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            style={{
              transform: `rotateX(${isQuestionClicked ? "180deg" : "0deg"})`,
              transition: "transform 0.3s ease",
            }}
            height="7"
            viewBox="0 0 9 5"
            fill="none"
          >
            <path
              d="M4.5 5L0.602885 0.5L8.39711 0.500001L4.5 5Z"
              fill="#05C2DF"
            />
          </svg>
        </div>
        <motion.div animate={{ height }}>
          {isQuestionClicked && (
            <div className="qa__wrapper" ref={ref}>
              <p className="qa__answer">{answer}</p>
              <p className="qa__date">{date}</p>
            </div>
          )}
        </motion.div>
      </div>
    </MotionConfig>
  );
};
