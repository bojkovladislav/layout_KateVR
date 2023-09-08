import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";
import { BurgerMenuSlider } from "./components/BurgerMenuSlider";
import { HomePage } from "./pages/HomePage";
import "./base/App.scss";
import { MoreSection } from "./components/MoreSection";

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

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
              </>
            }
          />

          <Route
            path="/about"
            element={<div>We are now at the about page!</div>}
          />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
