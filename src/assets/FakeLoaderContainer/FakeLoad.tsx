import { FC, ReactNode, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './fakeLoad.scss';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
  delay?: number;
  centerByY?: boolean;
  centerByX?: boolean;
}

export const FakeLoad: FC<Props> = ({
  children,
  delay,
  centerByY,
  centerByX,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const fakeFetch = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, delay || 2000);
    });
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        await fakeFetch();
      } finally {
        setIsLoading(false);
      }
    })();
    //eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classNames(
        'fakeLoad',
        { fakeLoad__loading: isLoading },
        { fakeLoad__center: centerByY },
        { 'fakeLoad__center--ByX': centerByX }
      )}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="fakeLoad__content">{children}</div>
      )}
    </div>
  );
};
