import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  currentIndex: number;
}

export const WhyUsAnimatedIcon: FC<Props> = ({ currentIndex }) => {
  return (
    <>
      {currentIndex === 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="98"
          height="81"
          viewBox="0 0 98 81"
          fill="none"
        >
          <motion.path
            d="M45.0135 28.0796V21.0693M61.6458 35.3649H69.7558M31.9551 45.8116H36.3537M53.9482 60.5195V53.5092"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="36.7168"
            y="28.4419"
            width="24.567"
            height="24.567"
            rx="3.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="41.3896"
            y="33.1157"
            width="15.4948"
            height="15.4948"
            rx="3.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="69.9814"
            y="1.50049"
            width="18.5189"
            height="18.5189"
            rx="3.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="74.3799"
            y="5.89893"
            width="9.99656"
            height="9.99656"
            rx="2.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="9.5"
            y="1.50049"
            width="18.5189"
            height="18.5189"
            rx="3.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="13.8984"
            y="5.89893"
            width="9.99656"
            height="9.99656"
            rx="2.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="10.3252"
            y="61.4316"
            width="18.5189"
            height="18.5189"
            rx="3.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="14.7236"
            y="65.8306"
            width="9.99656"
            height="9.99656"
            rx="2.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="69.9814"
            y="61.4316"
            width="18.5189"
            height="18.5189"
            rx="3.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="74.3799"
            y="65.8306"
            width="9.99656"
            height="9.99656"
            rx="2.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M54.2236 28.0796V10.8975H69.3439"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M36.3535 38.1138L18.8965 38.1138L18.8965 20.5193"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M61.7837 41.9629L78.9658 41.9629L78.9658 60.932"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M45.5635 53.5093L45.5635 70.6914L29.2061 70.6914"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <circle cx="45.0133" cy="18.5948" r="1.97423" stroke="#05C2DF" />
          <circle cx="72.2301" cy="35.3649" r="1.97423" stroke="#05C2DF" />
          <circle cx="29.6188" cy="45.8116" r="1.97423" stroke="#05C2DF" />
          <circle cx="53.8111" cy="62.8561" r="1.97423" stroke="#05C2DF" />
        </svg>
      )}

      {currentIndex === 1 && (
        <svg
          width="88"
          height="80"
          viewBox="0 0 88 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="2.0625"
            y="1.92014"
            width="84.3965"
            height="59.5917"
            rx="3.5"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.line
            x1="1.5625"
            y1="51.571"
            x2="86.959"
            y2="51.571"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.line
            x1="40.0723"
            y1="56.778"
            x2="47.9243"
            y2="56.778"
            stroke="#05C2DF"
            stroke-linecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="27.0547"
            y="62.0385"
            width="33.8876"
            height="5.15385"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="16.6406"
            y="73.3995"
            width="54.716"
            height="5.15385"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M17.9696 72.8727L26.6915 67.7189H61.3057L70.0276 72.8727H17.9696Z"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M34.248 39.064H33.576L23.768 16.6H24.392L33.912 38.424L43.448 16.6H44.072L34.248 39.064ZM56.4278 16.6C58.8171 16.6 60.6731 17.128 61.9958 18.184C63.3291 19.24 63.9958 20.7173 63.9958 22.616C63.9958 24.5147 63.3291 25.9973 61.9958 27.064C60.6624 28.12 58.8064 28.648 56.4278 28.648H54.4438L63.8678 39H63.0998L53.7238 28.648H49.0358V39H48.4438V16.6H56.4278ZM49.0358 17.16V28.104H56.4918C58.6784 28.104 60.3744 27.624 61.5798 26.664C62.7851 25.704 63.3878 24.3547 63.3878 22.616C63.3878 20.888 62.7798 19.5493 61.5638 18.6C60.3584 17.64 58.6678 17.16 56.4918 17.16H49.0358Z"
            fill="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </svg>
      )}

      {currentIndex === 2 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="113"
          height="82"
          viewBox="0 0 113 82"
          fill="none"
        >
          <motion.circle
            cx="56.6543"
            cy="41.1557"
            r="13.5898"
            stroke="#05C2DF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M71.0967 26.7505C75.7662 29.8395 78.8461 35.1382 78.8461 41.1561C78.8461 47.1741 75.7662 52.4727 71.0967 55.5618"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M71.2725 55.4219L77.6129 63.5235"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M77.4371 63.6995C84.8659 58.8276 89.7657 50.4709 89.7657 40.9796C89.7657 31.4884 84.8659 23.1316 77.4371 18.2598L71.0967 26.8898"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M84.4824 9.80615C94.4582 16.4153 101.038 27.7519 101.038 40.6277C101.038 53.5034 94.4582 64.84 84.4824 71.4492"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M84.4818 9.98227L90.8222 1C103.77 9.53524 112.309 24.1757 112.309 40.8038C112.309 57.4318 103.77 72.0723 90.8222 80.6075L84.3057 71.4491"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M42.2119 26.7505C37.5424 29.8395 34.4625 35.1382 34.4625 41.1561C34.4625 47.1741 37.5424 52.4727 42.2119 55.5618"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path d="M42.0361 55.4219L35.6957 63.5235" stroke="#05C2DF" />
          <motion.path
            d="M35.8715 63.6995C28.4427 58.8276 23.5429 50.4709 23.5429 40.9796C23.5429 31.4884 28.4427 23.1316 35.8715 18.2598L42.2119 26.8898"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M28.8271 9.80615C18.8513 16.4153 12.2716 27.7519 12.2716 40.6277C12.2716 53.5034 18.8513 64.84 28.8271 71.4492"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M28.8278 9.98227L22.4874 1C9.54004 9.53524 1.00037 24.1757 1.00037 40.8038C1.00037 57.4318 9.54004 72.0723 22.4874 80.6075L29.0039 71.4491"
            stroke="#05C2DF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </svg>
      )}
    </>
  );
};
