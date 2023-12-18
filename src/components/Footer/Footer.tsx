import { FC } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import YoutubeIcon from "@mui/icons-material/YouTube";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import cn from "classnames";
import { Logo } from "../../assets/Logo";
import { Navigation } from "../../assets/Navigation";
import { Contacts } from "../../assets/Contacts";
import { SocialMedias } from "../../assets/SocialMedias";
import { SizeOfIcon } from "../../Enums/SizeOfIcon";
import "./footer.scss";

const navLinks = ["About", "Tech", "Benefits", "Contact"];
const contactInformation = [
  "+86-0571-86105373",
  "global@katvr.com",
  "overseas@katvr.com",
];
const socialMedias = [
  {
    name: "facebook",
    icon: (
      <FacebookIcon
        fontSize="small"
        sx={{
          transition: "0.3s",
          ":hover": { transform: "scale(1.2)" },
        }}
      />
    ),
  },
  {
    name: "twitter",
    icon: (
      <TwitterIcon
        fontSize="small"
        sx={{
          transition: "0.3s",
          ":hover": { transform: "scale(1.2)" },
        }}
      />
    ),
  },
  {
    name: "youtube",
    icon: (
      <YoutubeIcon
        fontSize="small"
        sx={{
          transition: "0.3s",
          ":hover": { transform: "scale(1.2)" },
        }}
      />
    ),
  },
  {
    name: "reddit",
    icon: (
      <RedditIcon
        fontSize="small"
        sx={{
          transition: "0.3s",
          ":hover": { transform: "scale(1.2)" },
        }}
      />
    ),
  },
];

export const Footer: FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <footer className={cn("footer", { "footer--onPc": isLargeScreen })}>
      <Logo size={SizeOfIcon.MEDIUM} />

      {isLargeScreen && <Navigation navLinks={navLinks} onPc={isLargeScreen} />}

      <div className={"footer__info-container"}>
        {!isLargeScreen && <Navigation navLinks={navLinks} />}

        <div className="footer__contacts">
          {!isLargeScreen && (
            <Contacts contactInformation={contactInformation} />
          )}
          <SocialMedias socialMedias={socialMedias} onPc={isLargeScreen} />
        </div>
      </div>
    </footer>
  );
};
