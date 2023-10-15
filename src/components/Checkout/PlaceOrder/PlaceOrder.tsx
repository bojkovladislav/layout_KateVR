import { FC, useState, useEffect } from "react";
import { Form } from "../../../assets/Form";
import axios from "axios";
import "./placeOrder.scss";
import { FakeLoad } from "../../../assets/FakeLoaderContainer";

const inputNames = [
  "First Name",
  "Last Name",
  "Email",
  "Phone Number",
  "Country",
  "City",
  "Shipping Address",
  "Shipping Address2",
];

export type DropDownMenu = {
  Country: Array<{ [key: string]: string | string[] }>;
  City: string[];
};

interface Props {
  setPlaceOrderSubmitted: (placeOrderSubmitted: boolean) => void;
}

export const PlaceOrder: FC<Props> = ({ setPlaceOrderSubmitted }) => {
  const [dropDownMenus, setDropDownMenus] = useState<DropDownMenu>({
    Country: [],
    City: [],
  });

  const setCity = (currentCountry: string) => {
    const country = dropDownMenus.Country.find(
      (c) => c.country === currentCountry
    );

    if (country) {
      setDropDownMenus({ ...dropDownMenus, City: country.cities as string[] });
    }
  };

  const fetchCountries = async () => {
    try {
      const country = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );

      setDropDownMenus({ ...dropDownMenus, Country: country.data.data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const placeOrderStorage = localStorage.getItem("place-order");

  function renderForm() {
    return (
      <Form
        inputNames={inputNames}
        submitButtonText="Purchase"
        dropDownMenus={dropDownMenus}
        setCity={dropDownMenus ? setCity : undefined}
        saveDataInStorage
        setPlaceOrderSubmitted={setPlaceOrderSubmitted}
      />
    );
  }

  return (
    <div className="placeOrder">
      {placeOrderStorage &&
      Object.values(JSON.parse(placeOrderStorage)).some(
        (value) => value.length
      ) ? (
        <FakeLoad delay={500}>{renderForm()}</FakeLoad>
      ) : (
        renderForm()
      )}
    </div>
  );
};
