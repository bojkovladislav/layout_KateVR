import { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import cn from "classnames";
import "./complete.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Complete: FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="complete">
      <div className="complete__container">
        <div
          className={cn("complete__title-wrapper", {
            "complete__title-wrapper--onPc": isLargeScreen,
          })}
        >
          <h1
            className={cn("complete__title", {
              "complete__title--onPc": isLargeScreen,
            })}
          >
            Thank you for
          </h1>
          <div className="complete__inner-title-wrapper">
            <h1
              className={cn("complete__title", "complete__title--blue", {
                "complete__title--onPc": isLargeScreen,
              })}
            >
              Your
            </h1>
            <h1
              className={cn("complete__title", {
                "complete__title--onPc": isLargeScreen,
              })}
            >
              Order!
            </h1>
          </div>
        </div>

        <p
          className={cn("complete__paragraph", {
            "complete__paragraph--onPc": isLargeScreen,
          })}
        >
          Your order has been placed and is being processed. You will recive an
          email with the order details
        </p>

        <Button
          variant="contained"
          onClick={() => {
            localStorage.removeItem("place-order");
            localStorage.removeItem("pay");
          }}
          sx={{
            background: "#05c2df",
            width: isLargeScreen ? "260px" : "90%",
            height: isLargeScreen ? "48px" : "",
            padding: 0,
          }}
        >
          <Link
            to="/"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
            }}
          >
            Back to homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};
