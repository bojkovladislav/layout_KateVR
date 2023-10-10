import { FC } from "react";
import "./complete.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Complete: FC = () => {
  return (
    <div className="complete">
      <div className="complete__container">
        <h1 className="complete__title">Than you for</h1>
        <div className="complete__title-wrapper">
          <h1 className="complete__title complete__title--blue">Your</h1>
          <h1 className="complete__title">Order!</h1>
        </div>

        <p className="complete__paragraph">
          Your order has been placed and is being processed. You will recive an
          email with the order details
        </p>

        <Button
          variant="contained"
          sx={{
            background: "#05c2df",
            width: "100%",
            padding: 0,
          }}
        >
          <Link
            to="/"
            style={{
              width: "100%",
              height: "100%",
              display: "inline-block",
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
