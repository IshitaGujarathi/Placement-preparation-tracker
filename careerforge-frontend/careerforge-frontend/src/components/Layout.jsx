import { Box, Toolbar } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({
  children,
  mode,
  toggleTheme,
}) {

  return (

    <Box
      sx={{
        display: "flex",
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
        transition: "0.4s",
      }}
    >

      <Navbar
        mode={mode}
        toggleTheme={toggleTheme}
      />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          bgcolor: "background.default",
          transition: "0.4s",
          minHeight: "100vh",
        }}
      >

        <Toolbar />

        {children}

      </Box>

    </Box>

  );

}