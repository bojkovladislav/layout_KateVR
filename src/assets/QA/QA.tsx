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
        <h3 className="qa__question">{question}</h3>
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
