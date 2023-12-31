import { FC } from "react";
import "./faq.scss";
import { QA } from "../../assets/QA";
import { FakeLoad } from "../../assets/FakeLoaderContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import cn from "classnames";

const faq = [
  {
    question: "What makes KAT loco different from other systems?",
    answer:
      "Despite being approached from many different angles, all traditional VR Locomotion systems including roomscale, teleportation, and free locomotion failed to provide an optimal solution capable of integrating high immersion with convenience. KAT loco does all of that without repeating their flaws. Our system offers a complete and versatile solution for an affordable price what makes it a perfect choice for home-use. It is also 100% user friendly, wireless, universally compatible, and more! It even offers decoupled head and body directions!",
    date: "Last updated: Wed, June 12 2019 7:07 PM UTC +03:00",
  },
  {
    question: "Will it decrease my motion sickness?",
    answer:
      "Despite being approached from many different angles, all traditional VR Locomotion systems including roomscale, teleportation, and free locomotion failed to provide an optimal solution capable of integrating high immersion with convenience. KAT loco does all of that without repeating their flaws. Our system offers a complete and versatile solution for an affordable price what makes it a perfect choice for home-use. It is also 100% user friendly, wireless, universally compatible, and more! It even offers decoupled head and body directions!",
    date: "Last updated: Wed, June 12 2019 7:07 PM UTC +03:00",
  },
  {
    question: "Which VR headsets is it compatible with?",
    answer:
      "Despite being approached from many different angles, all traditional VR Locomotion systems including roomscale, teleportation, and free locomotion failed to provide an optimal solution capable of integrating high immersion with convenience. KAT loco does all of that without repeating their flaws. Our system offers a complete and versatile solution for an affordable price what makes it a perfect choice for home-use. It is also 100% user friendly, wireless, universally compatible, and more! It even offers decoupled head and body directions!",
    date: "Last updated: Wed, June 12 2019 7:07 PM UTC +03:00",
  },
  {
    question: "Is it compatible with Oculus Quest?",
    answer:
      "Despite being approached from many different angles, all traditional VR Locomotion systems including roomscale, teleportation, and free locomotion failed to provide an optimal solution capable of integrating high immersion with convenience. KAT loco does all of that without repeating their flaws. Our system offers a complete and versatile solution for an affordable price what makes it a perfect choice for home-use. It is also 100% user friendly, wireless, universally compatible, and more! It even offers decoupled head and body directions!",
    date: "Last updated: Wed, June 12 2019 7:07 PM UTC +03:00",
  },
];

interface Props {
  scroll?: boolean;
}

export const FAQ: FC<Props> = ({ scroll }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className={cn("faq", { faq__scroll: scroll })}>
      <div
        className={cn("faq__title-wrapper", {
          "faq__title-wrapper--onPc": isLargeScreen,
        })}
      >
        <h2 className={cn("faq__title", { "faq__title--onPc": isLargeScreen })}>
          FREQUENTLY ASKED
        </h2>
        <h2
          className={cn("faq__title", "faq__title--blue", {
            "faq__title--onPc": isLargeScreen,
          })}
        >
          QUESTIONS
        </h2>
      </div>

      <FakeLoad>
        <ul className="faq__list">
          {faq.map(({ question, answer, date }) => (
            <li key={question}>
              <QA question={question} answer={answer} date={date} />
            </li>
          ))}
        </ul>
      </FakeLoad>
    </div>
  );
};
