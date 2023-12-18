import { FC, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface Props {
  initialValue?: number;
  dependencies?: unknown[];
  endValue: number;
  duration?: number;
  className?: string;
}

export const Counting: FC<Props> = ({
  initialValue,
  dependencies,
  endValue,
  duration,
  className,
}) => {
  const value = useMotionValue(initialValue || 0);
  const rounded = useTransform(value, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(value, endValue, { duration: duration || 2 });

    return controls.stop;
    //eslint-disable-next-line  react-hooks/exhaustive-deps
  }, dependencies && dependencies);

  return <motion.div className={className}>{rounded}</motion.div>;
};
