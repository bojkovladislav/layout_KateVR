import { FC } from "react";
import "./faq.scss";
import { QA } from "../../assets/QA";
import { FakeLoad } from "../../assets/FakeLoaderContainer";

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

export const FAQ: FC = () => {
  return (
    <div className="faq">
      <h2 className="faq__title">FREQUENTLY ASKED</h2>
      <h2 className="faq__title faq__title--blue">QUESTIONS</h2>

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
