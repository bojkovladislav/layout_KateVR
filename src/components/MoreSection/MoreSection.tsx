import { FC, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './moreSection.scss';
import { Slide } from '../../assets/animations/Slide';
import { SlideDirection } from '../../Enums/SlideDirection';
import { Appearance2 } from '../../assets/animations/Appearance2';
import cn from 'classnames';
import { Parallax } from 'react-scroll-parallax';
import { AnimatedIcon } from '../../assets/AnimatedIcon';
import { Appearance } from '../../assets/animations/Appearance';

const benefits = [
  {
    name: 'EDUCATION',
    description:
      'Create aducational simulations, trainings and much more with unlimited virtual space and minimum physical space',
  },
  {
    name: 'REAL ESTATE',
    description:
      'Desighn architectural projects in a deeply realistic environment allowing visitors to freely walk around, and feel their vibe',
  },
  {
    name: 'FITNESS',
    description:
      'Combine business with pleasure, and discover countless ways to stay fit while playing your favorite VR Games!',
  },
  {
    name: 'SOCIAL INTERACTIONS',
    description:
      'Hang out with your friends in the virtual world when you can’t meet space requirements',
  },
];

export const MoreSection: FC = () => {
  const [drawSVG, setDrawSVG] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const renderMoreSectionTitle = (title: string, blue?: boolean) => (
    <h2
      className={cn('moreSection__title', {
        'moreSection__title--blue': blue,
        'moreSection__title--onPc': isLargeScreen,
      })}
    >
      {title}
    </h2>
  );

  return (
    <section
      className={cn('moreSection', { 'moreSection--onPc': isLargeScreen })}
      id="more-section"
    >
      {!isLargeScreen ? (
        <div className="moreSection__title-wrapper ">
          <Slide direction={SlideDirection.LEFT} onScroll>
            {renderMoreSectionTitle('MORE THAN ')}
          </Slide>
          <Slide direction={SlideDirection.RIGHT} onScroll>
            {renderMoreSectionTitle('GAMING!', true)}
          </Slide>
        </div>
      ) : (
        <div className="moreSection__title-wrapper moreSection__title-wrapper--onPc">
          {renderMoreSectionTitle('MORE THAN ')}
          {renderMoreSectionTitle('GAMING!', true)}
        </div>
      )}

      <p
        className={cn('moreSection__second-title', {
          'moreSection__second-title--onPc': isLargeScreen,
        })}
      >
        This also made for people who are interested in...
      </p>

      <div
        className={cn('moreSection__benefits', {
          'moreSection__benefits--onPc': isLargeScreen,
        })}
      >
        {benefits.map(({ name, description }, index) => (
          <div
            className={cn('moreSection__benefit', {
              'moreSection__benefit--onPc': isLargeScreen,
            })}
            key={name}
          >
            {isLargeScreen && (
              <Parallax
                onEnter={() => setDrawSVG(true)}
                style={{ minHeight: 85 }}
              >
                {drawSVG && <AnimatedIcon currentIndex={index} />}
              </Parallax>
            )}

            {isLargeScreen ? (
              <Appearance delay={1} onScroll once>
                <h3 className="moreSection__benefit-name moreSection__benefit-name--onPc">
                  {name}
                </h3>
              </Appearance>
            ) : (
              <Slide direction={SlideDirection.LEFT} onScroll>
                <h3 className="moreSection__benefit-name">{name}</h3>
              </Slide>
            )}

            {isLargeScreen ? (
              <Appearance2 onScroll once delay={1.5}>
                <p className="moreSection__benefit-description moreSection__benefit-description--onPc">
                  {description}
                </p>
              </Appearance2>
            ) : (
              <Slide direction={SlideDirection.LEFT} onScroll>
                <p className="moreSection__benefit-description">
                  {description}
                </p>
              </Slide>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
