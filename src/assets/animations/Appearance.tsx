import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  increase?: boolean;
}

export const Appearance: FC<Props> = ({ children, delay, increase }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: increase ? 0.2 : 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};
