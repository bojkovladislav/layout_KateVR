import { FC, useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { SizeOfIcon } from "../../Enums/SizeOfIcon";
import { Logo } from "../../assets/Logo";
import { DropDownMenu } from "../../assets/DropDownMenu";
import "./checkout.scss";
import { PlaceOrder } from "./PlaceOrder";
import { Pay } from "./Pay";
import { Complete } from "./Complete/Complete";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
  };
}

export const Checkout: FC = () => {
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(quantity * 1200);

  useEffect(() => {
    setPrice(quantity * 1200);
  }, [quantity]);

  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            "&.MuiTabs-indicator": {
              backgroundColor: "#05c2df",
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#05c2df",
            },
            "&.Mui-disabled": {
              color: "#545454",
            },
            color: "white",
            textTransform: "none",
          },
        },
      },
    },
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="checkout">
      <div className="checkout__header">
        <Logo size={SizeOfIcon.MEDIUM} />
        <Link to={"/"}>
          <CloseIcon style={{ color: "#fff" }} />
        </Link>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "#2F2F2F",
          }}
        >
          <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              <Tab label="Place order" {...a11yProps(0)} />
              <Tab label="Pay" {...a11yProps(1)} />
              <Tab label="Complete" {...a11yProps(2)} />
            </Tabs>
          </ThemeProvider>
        </Box>

        <div className="checkout__container">
          {value !== 2 && (
            <div className="checkout__wrapper">
              <div className="checkout__wrapper--inner">
                <p className="checkout__text">Quantity</p>
                <DropDownMenu
                  width={"90px"}
                  content={["1", "2", "3", "4", "5"]}
                  customValue={quantity}
                  setCustomValue={setQuantity}
                />
              </div>
              <div className="checkout__wrapper--inner">
                <p className="checkout__text">Price</p>
                <h2 className="checkout__value">{`${price}$`}</h2>
              </div>
            </div>
          )}
          {value === 0 && <PlaceOrder />}
          {value === 1 && <Pay />}
          {value === 2 && <Complete />}
        </div>
      </Box>
    </div>
  );
};
