import { FC, ReactNode } from "react";
import cn from "classnames";
import "./social-medias.scss";

type socialMedia = {
  name: string;
  icon: ReactNode;
};

interface Props {
  socialMedias: socialMedia[];
  onPc?: boolean;
}

export const SocialMedias: FC<Props> = ({ socialMedias, onPc }) => {
  return (
    <ul className={cn("social-medias", { "social-medias--onPc": onPc })}>
      {socialMedias.map(({ name, icon }) => (
        <li key={name}>
          <a href={`https://${name}.com`} target="_blank">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
