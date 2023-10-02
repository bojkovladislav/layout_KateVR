import { FC, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { SizeOfIcon } from "../../Enums/SizeOfIcon";
import { Logo } from "../../assets/Logo";
import { DropDownMenu } from "../../assets/DropDownMenu";
import "./checkout.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
  };
}

export const Checkout: FC = () => {
  const [value, setValue] = useState(0);

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
            color: "#545454",
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
              <Tab
                label="Place order"
                {...a11yProps(0)}
                sx={{ "Mui-selected": { color: "red" } }}
              />
              <Tab label="Pay" {...a11yProps(1)} />
              <Tab label="Complete" {...a11yProps(2)} />
            </Tabs>
          </ThemeProvider>
        </Box>

        {value !== 2 && (
          <div className="checkout__wrapper">
            <div className="checkout__wrapper--inner">
              <p className="checkout__text">Quantity</p>
              <DropDownMenu />
            </div>
            <div className="checkout__wrapper--inner">
              <p className="checkout__text">Price</p>
              <h2 className="checkout__value">1200$</h2>
            </div>
          </div>
        )}

        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </div>
  );
};
