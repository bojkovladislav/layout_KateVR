import { FC, ReactNode } from "react";
import "./social-medias.scss";

type socialMedia = {
  name: string;
  icon: ReactNode;
};

interface Props {
  socialMedias: socialMedia[];
}

export const SocialMedias: FC<Props> = ({ socialMedias }) => {
  return (
    <ul className="social-medias">
      {socialMedias.map(({ name, icon }) => (
        <li>
          <a href={`https://${name}.com`} target="_blank">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
