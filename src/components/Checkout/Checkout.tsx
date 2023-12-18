import { FC, useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import cn from "classnames";
import { SizeOfIcon } from "../../Enums/SizeOfIcon";
import { Logo } from "../../assets/Logo";
import { DropDownMenu } from "../../assets/DropDownMenu";
import "./checkout.scss";
import { PlaceOrder } from "./PlaceOrder";
import { Pay } from "./Pay";
import { Complete } from "./Complete/Complete";
import { Counting } from "../../assets/animations/Counting";
import { FakeLoad } from "../../assets/FakeLoaderContainer";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
  };
}

export const Checkout: FC = () => {
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const themeForResizing = useTheme();
  const isLargeScreen = useMediaQuery(themeForResizing.breakpoints.up("lg"));
  const [price, setPrice] = useState(quantity * 1200);
  const [placeOrderSubmitted, setPlaceOrderSubmitted] = useState(false);
  const [paySubmitted, setPaySubmitted] = useState(false);

  useEffect(() => {
    setPrice(quantity * 1200);
  }, [quantity]);

  useEffect(() => {
    console.log("The component has been mounted");
  }, []);

  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          flexContainer: {
            justifyContent: isLargeScreen ? "space-evenly" : "space-between",
          },
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

  const handleClearLocalStorage = () => {
    localStorage.removeItem("pay");
    localStorage.removeItem("place-order");
  };

  useEffect(() => {
    if (placeOrderSubmitted) {
      setValue(1);
    }

    if (paySubmitted) {
      setValue(2);
      setPlaceOrderSubmitted(false);
    }
  }, [placeOrderSubmitted, paySubmitted]);

  return (
    <div className={cn("checkout", { "checkout--onPc": isLargeScreen })}>
      {!isLargeScreen && (
        <div className="checkout__header">
          <div onClick={handleClearLocalStorage}>
            <Logo size={SizeOfIcon.MEDIUM} />
          </div>
          <Link to={"/"} onClick={handleClearLocalStorage}>
            <CloseIcon style={{ color: "#fff" }} />
          </Link>
        </div>
      )}

      <FakeLoad delay={500} centerByX={isLargeScreen} centerByY>
        <Box sx={{ width: "100%" }}>
          <div className="checkout__tabs-container">
            {isLargeScreen && (
              <div onClick={handleClearLocalStorage}>
                <Logo size={SizeOfIcon.BIG} />
              </div>
            )}

            <Box
              sx={{
                borderBottom: !isLargeScreen ? "1px solid #2F2F2F" : null,
                flex: 1,
              }}
            >
              <ThemeProvider theme={theme}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant={!isLargeScreen ? "fullWidth" : "standard"}
                >
                  <Tab
                    label="Place order"
                    {...a11yProps(0)}
                    disabled={value === 2}
                  />
                  <Tab
                    label="Pay"
                    {...a11yProps(1)}
                    disabled={!placeOrderSubmitted}
                  />
                  <Tab
                    label={!isLargeScreen ? "Complete" : "Order complete"}
                    {...a11yProps(2)}
                    disabled={!paySubmitted}
                  />
                </Tabs>
              </ThemeProvider>
            </Box>
          </div>
          <div
            className={cn("checkout__container", {
              "checkout__container--onPc": isLargeScreen,
              "checkout__container--onPc-center": value === 2,
            })}
          >
            {value !== 2 && (
              <div
                className={cn("checkout__device-presentation-container", {
                  "checkout__device-presentation-container--onPc":
                    isLargeScreen,
                })}
              >
                {isLargeScreen && (
                  <img
                    src="images/image-phone.png"
                    alt="Device"
                    className="checkout__device"
                  />
                )}
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
                    <div className="checkout__price-container">
                      {
                        <Counting
                          endValue={price}
                          initialValue={price}
                          duration={0.5}
                          className={cn(
                            "checkout__value",
                            "checkout__value--first",
                            { "checkout__value--first--onPc": isLargeScreen },
                            { "checkout__value--onPc": isLargeScreen }
                          )}
                        />
                      }
                      <h2
                        className={cn("checkout__value", {
                          "checkout__value--onPc": isLargeScreen,
                        })}
                      >
                        $
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {value === 0 && (
              <PlaceOrder
                setPlaceOrderSubmitted={setPlaceOrderSubmitted}
                setValue={setValue}
              />
            )}
            {value === 1 && <Pay setPaySubmitted={setPaySubmitted} />}
            {value === 2 && (
              <FakeLoad centerByX={isLargeScreen}>
                <Complete />
              </FakeLoad>
            )}
          </div>
        </Box>
      </FakeLoad>
    </div>
  );
};
