import { createTheme } from "@mui/material";

export const themeForCardInput = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingBottom: "9px",
          "& input": {
            textAlign: "center",
            letterSpacing: "3.6px",
            color: "#fff",
          },
          "&.MuiInput-root::after": {
            borderBottom: "2px solid #05c2df",
          },
          "&.MuiInput-root::before": {
            borderBottom: "1px solid #2f2f2f",
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
