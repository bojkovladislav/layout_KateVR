import { FC } from "react";
import { Form } from "../../../assets/Form";

const inputNames = ["First Name", "Last Name", "Email", "Phone Number"];

export const PlaceOrder: FC = () => {
  return (
    <>
      <Form inputNames={inputNames} submitButtonText="Purchase" />
    </>
  );
};
