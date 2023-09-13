import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { SlideDirection } from "../../Enums/SlideDirection";

interface Props {
  children: ReactNode;
  direction: SlideDirection;
  delay?: number;
  onScroll?: boolean;
}

interface SlideByYProps {
  direction: SlideDirection.BOTTOM | SlideDirection.TOP;
  children: ReactNode;
  delay?: number;
}

interface SlideByXProps {
  direction: SlideDirection.LEFT | SlideDirection.RIGHT;
  children: ReactNode;
  delay?: number;
}

const SlideByY: FC<SlideByYProps> = ({ children, direction, delay }) => {
  return (
    <motion.div
      initial={{
        y: `${direction === SlideDirection.TOP ? "-1000px" : "1000px"}`,
        position: "absolute",
      }}
      animate={{ y: 0, position: "initial" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

const SlideByX: FC<SlideByXProps> = ({ children, direction, delay }) => {
  return (
    <motion.div
      initial={{
        x: `${direction === SlideDirection.LEFT ? "-100%" : "100%"}`,
      }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

export const Slide: FC<Props> = ({ children, direction, delay, onScroll }) => {
  return (
    <>
      {direction === SlideDirection.BOTTOM ||
      direction === SlideDirection.TOP ? (
        <>
          {onScroll ? (
            <motion.div transition={{ duration: 0.5, delay }} initial="hidden">
              {children}
            </motion.div>
          ) : (
            <SlideByY direction={direction} delay={delay}>
              {children}
            </SlideByY>
          )}
        </>
      ) : (
        <>
          {onScroll ? (
            <motion.div
              initial={{
                x: `${direction === SlideDirection.LEFT ? "-100%" : "100%"}`,
                opacity: 0,
              }}
              whileInView={{
                x: "0",
                opacity: 1,
              }}
              transition={{
                type: "spring",
                delay,
                stiffness: 40,
              }}
            >
              {children}
            </motion.div>
          ) : (
            <SlideByX direction={direction} delay={delay}>
              {children}
            </SlideByX>
          )}
        </>
      )}
    </>
  );
};
