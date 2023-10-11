import { createTheme } from "@mui/material";

export const inputTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-root": {
            color: "#fff",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&.MuiMenu-list": {
            backgroundColor: "#191536",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingBottom: "19px",
          "& input": {
            color: "#fff",
          },
          "&.MuiInput-root::before": {
            borderBottom: "1px solid #2f2f2f",
          },
          "&.MuiInput-root::after": {
            borderBottom: "2px solid #05c2df",
          },
          "&.MuiInput-root:hover:not(error)::before": {
            borderBottom: "1px solid #2f2f2f",
          },
          "&.MuiInput-root.Mui-error:hover:not(disabled)::before": {
            borderBottom: "2px solid #d32f2f",
          },
        },
      },
    },
  },
});
