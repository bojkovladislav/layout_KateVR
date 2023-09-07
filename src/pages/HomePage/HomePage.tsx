import { FC } from "react";
import "./homePage.scss";

export const HomePage: FC = () => {
  return (
    <div className="homePage">
      <img
        className="homePage__previewImage"
        src="/public/images/preview-image.png"
        alt="Preview"
      />

      <h1 className="homePage__title homePage__title--first">
        THE NEW START OF
      </h1>
      <h1 className="homePage__title homePage__title--second">VR LOCOMOTION</h1>

      <p className="homePage__description">
        Discover the most comprehensive VR Locomotion system, and unlock
        infinite motion in any games on any platforms!
      </p>

      <h2 className="homePage__price">1200</h2>

      <a href="https://www.youtube.com/watch?v=SvTbB19bvIw" target="_blank">
        <img src="/images/play-button.svg" alt="Play button" />
      </a>
    </div>
  );
};
