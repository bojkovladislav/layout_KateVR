import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  increase?: boolean;
  onScroll?: boolean;
  once?: boolean;
}

export const Scale: FC<Props> = ({
  children,
  once,
  delay,
  increase,
  onScroll,
}) => {
  return (
    <>
      {onScroll ? (
        <motion.div
          initial={{ opacity: 0, scale: increase ? 0.2 : 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once }}
          transition={{ duration: 0.5, delay }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: increase ? 0.2 : 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};
