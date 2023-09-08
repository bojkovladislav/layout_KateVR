import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
}

export const SlideFromBottom: FC<Props> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ y: "1000px" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};
