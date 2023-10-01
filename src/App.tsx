import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpened]);

  useEffect(() => {
    if (location.hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location]);

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
