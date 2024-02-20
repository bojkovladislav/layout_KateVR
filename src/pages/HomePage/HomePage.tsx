import { FC, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Appearance } from '../../assets/animations/Appearance';
import { Modal } from '../../assets/Modal';
import { Slide } from '../../assets/animations/Slide';
import { SlideDirection } from '../../Enums/SlideDirection';
import { Appearance2 } from '../../assets/animations/Appearance2';
import { TypingAnimation } from '../../assets/animations/TypingAnimation';
import { Link } from 'react-router-dom';
import { Counting } from '../../assets/animations/Counting';
import cn from 'classnames';
import './homePage.scss';
import { FAQ } from '../../components/FAQ';
import { Help } from '../../components/Help';

export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFaqOpened, setIsFaqOpened] = useState(false);
  const [isHelpOpened, setIsHelpOpened] = useState(false);
  const ref = useRef(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const utils = ['FAQ', t('Help')];

  return (
    <div
      className={cn('homePage', { 'homePage--onPc': isLargeScreen })}
      ref={ref}
    >
      <div
        className={cn('homePage__container', {
          'homePage__container--onPc': isLargeScreen,
        })}
      >
        <Appearance2>
          <img
            src="images/image-phone.png"
            alt="Preview"
            className="homePage__previewImage"
          />
        </Appearance2>
        <div
          className={cn('homePage__wrapper', {
            'homePage__wrapper--onPc': isLargeScreen,
          })}
        >
          <div
            className={cn('homePage__title-container', {
              'homePage__title-container--onPc': isLargeScreen,
            })}
          >
            <TypingAnimation
              desiredText={t('THE NEW START OF')}
              delay={100}
              initialDelay={0}
              className={
                isLargeScreen ? 'homePage__title--onPc' : 'homePage__title'
              }
            />
            <div>
              <TypingAnimation
                desiredText="VR LOCOMOTION"
                delay={100}
                initialDelay={2000}
                className={
                  isLargeScreen
                    ? 'homePage__title--onPc homePage__title--blue'
                    : 'homePage__title homePage__title--blue'
                }
              />
            </div>
          </div>
          <Appearance delay={1.2} once>
            <p
              className={cn('homePage__description', {
                'homePage__description--onPc': isLargeScreen,
              })}
            >
              {t('HOMEPAGE-DESCRIPTION')}
            </p>
          </Appearance>
          <div
            className={cn('homePage__price-wrapper', {
              'homePage__price-wrapper--onPc': isLargeScreen,
            })}
          >
            <Appearance delay={0.5}>
              <h2 className="homePage__price">
                {<Counting endValue={1200} />}
              </h2>
            </Appearance>
            <Appearance delay={2.1}>
              <span className="homePage__price">$</span>
            </Appearance>
          </div>
          <Slide direction={SlideDirection.LEFT} delay={2.3}>
            <button
              onClick={handleModalOpen}
              className={cn('homePage__play-button', {
                'homePage__play-button--onPc': isLargeScreen,
              })}
            >
              <img src="images/play-button.svg" alt="Play button" />
            </button>
          </Slide>
        </div>
      </div>

      <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <iframe
          src="https://www.youtube.com/embed/SvTbB19bvIw?showinfo=0"
          width={isLargeScreen ? '1000px' : '400'}
          height={isLargeScreen ? '500px' : '350'}
          allowFullScreen
          frameBorder={0}
          aria-haspopup={false}
        />
      </Modal>

      {!isLargeScreen && (
        <Slide direction={SlideDirection.BOTTOM} delay={2.5}>
          <Button
            variant="contained"
            sx={{
              background: '#05c2df',
              width: '100%',
              padding: 0,
            }}
          >
            <Link
              to="/checkout"
              style={{
                width: '100%',
                height: '100%',
                display: 'inline-block',
                padding: '5px',
              }}
            >
              Buy now
            </Link>
          </Button>
        </Slide>
      )}

      {isLargeScreen && (
        <div className="homePage__bottom-container">
          <ul className="homePage__bottom-list">
            {utils.map((title) => (
              <li
                className="homePage__nav-item"
                style={{ cursor: 'pointer' }}
                key={title}
                onClick={() => {
                  if (title === 'Help') {
                    setIsHelpOpened(true);
                  } else {
                    setIsFaqOpened(true);
                  }
                }}
              >
                {title}
              </li>
            ))}
          </ul>

          <Link className="homePage__more-container" to="#more-section">
            <span>{t('More')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
            >
              <path
                d="M4.5 5L0.602885 0.5L8.39711 0.500001L4.5 5Z"
                fill="#05C2DF"
              />
            </svg>
          </Link>
        </div>
      )}

      <Modal
        isModalOpen={isFaqOpened}
        handleModalClose={() => setIsFaqOpened(false)}
        styles={{ minHeight: 450, backgroundColor: '#191536' }}
      >
        <FAQ />
      </Modal>

      <Modal
        isModalOpen={isHelpOpened}
        handleModalClose={() => setIsHelpOpened(false)}
        styles={{ minHeight: 450, backgroundColor: '#191536' }}
      >
        <Help />
      </Modal>
    </div>
  );
};
