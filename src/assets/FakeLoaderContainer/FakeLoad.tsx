import { FC, ReactNode, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./fakeLoad.scss";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  delay?: number;
  centerLoader?: boolean;
}

export const FakeLoad: FC<Props> = ({ children, delay, centerLoader }) => {
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
  }, []);

  return (
    <div
      className={classNames(
        "fakeLoad",
        { fakeLoad__loading: isLoading },
        { fakeLoad__center: centerLoader }
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
