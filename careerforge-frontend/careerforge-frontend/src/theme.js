import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#2563EB",
      },

      secondary: {
        main: "#7C3AED",
      },

      background: {
        default: mode === "dark" ? "#0F172A" : "#F5F7FB",
        paper: mode === "dark" ? "#1E293B" : "#FFFFFF",
      },

      text: {
        primary: mode === "dark" ? "#F8FAFC" : "#111827",
        secondary: mode === "dark" ? "#CBD5E1" : "#6B7280",
      },
    },

    shape: {
      borderRadius: 18,
    },

    typography: {
      fontFamily: "Poppins, sans-serif",

      h4: {
        fontWeight: 700,
      },

      h5: {
        fontWeight: 600,
      },

      h6: {
        fontWeight: 600,
      },

      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
  });