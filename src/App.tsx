import { useEffect, useState } from 'react';
import i18n from 'i18next';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { BurgerMenuSlider } from './components/BurgerMenuSlider';
import { HomePage } from './pages/HomePage';
import './base/App.scss';
import { MoreSection } from './components/MoreSection';
import { AboutSection } from './components/AboutSection';
import { TechSpecsSection } from './components/TechSpecsSection';
import { WhyUs } from './components/WhyUsSection';
import { GetInTouch } from './components/GetInTouch';
import { Checkout } from './components/Checkout';
import { Wrapper } from './components/Wrapper';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpened]);

  useEffect(() => {
    if (!location.hash.length) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);

        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [location]);

  useEffect(() => {
    const languageParam = searchParams.get('language');

    if (languageParam) {
      i18n.changeLanguage(languageParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ParallaxProvider>
      <BurgerMenuSlider
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper setIsMenuOpened={setIsMenuOpened}>
                <Parallax speed={2}>
                  <HomePage />
                </Parallax>
                <Parallax>
                  <MoreSection />
                </Parallax>
                <Parallax>
                  <AboutSection />
                </Parallax>
                <TechSpecsSection />
                <WhyUs />
                <GetInTouch />
              </Wrapper>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </ParallaxProvider>
  );
}

export default App;
