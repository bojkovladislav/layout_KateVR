import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  onScroll?: boolean;
  initial?: unknown;
  controls?: unknown;
}

export const Appearance2: FC<Props> = ({
  children,
  delay,
  onScroll,
  initial,
  controls,
}) => {
  return (
    <>
      {onScroll ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial={initial ? initial : { opacity: 0, y: 20 }}
          animate={controls ? controls : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};
