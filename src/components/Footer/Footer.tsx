import { FC } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import YoutubeIcon from "@mui/icons-material/YouTube";
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
    icon: <FacebookIcon fontSize="small" />,
  },
  {
    name: "twitter",
    icon: <TwitterIcon fontSize="small" />,
  },
  {
    name: "youtube",
    icon: <YoutubeIcon fontSize="small" />,
  },
  {
    name: "reddit",
    icon: <RedditIcon fontSize="small" />,
  },
];

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <Logo size={SizeOfIcon.MEDIUM} />

      <div className="footer__info-container">
        <Navigation navLinks={navLinks} />

        <div className="footer__contacts">
          <Contacts contactInformation={contactInformation} />
          <SocialMedias socialMedias={socialMedias} />
        </div>
      </div>
    </footer>
  );
};
