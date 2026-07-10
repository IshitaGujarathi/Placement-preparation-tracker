import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { getTheme } from "./theme";

import "./styles/global.css";

function Root() {

  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {

    const newMode = mode === "dark" ? "light" : "dark";

    setMode(newMode);

    localStorage.setItem("theme", newMode);

  };

  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <BrowserRouter>

        <AuthProvider>

          <App
            mode={mode}
            toggleTheme={toggleTheme}
          />

        </AuthProvider>

      </BrowserRouter>

    </ThemeProvider>

  );

}

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <Root />

  </React.StrictMode>

);