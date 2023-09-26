import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";
import { BurgerMenuSlider } from "./components/BurgerMenuSlider";
import { HomePage } from "./pages/HomePage";
import "./base/App.scss";
import { MoreSection } from "./components/MoreSection";
import { AboutSection } from "./components/AboutSection";
import { TechSpecsSection } from "./components/TechSpecsSection/TechSpecsSection";
import { WhyUs } from "./components/WhyUsSection";
import { GetInTouch } from "./components/GetInTouch";

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // every time user reloads the page I should get him back to the top so they don't see cracked animation of button moving from the bottom to top.
  });

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpened]);

  return (
    <>
      <BurgerMenuSlider
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
      <Wrapper setIsMenuOpened={setIsMenuOpened}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <MoreSection />
                <AboutSection />
                <TechSpecsSection />
                <WhyUs />
                <GetInTouch />
              </>
            }
          />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
