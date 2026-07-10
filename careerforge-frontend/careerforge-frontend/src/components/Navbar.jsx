import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon
} from "@mui/material";

import {
  Notifications,
  Brightness4,
  Brightness7,
  Person,
  Logout,
  Settings
} from "@mui/icons-material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ mode, toggleTheme }) {

  const navigate = useNavigate();

  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);

  const openNotification = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const closeNotification = () => {
    setNotificationAnchor(null);
  };

  const openProfile = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const closeProfile = () => {
    setProfileAnchor(null);
  };

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <AppBar
      position="fixed"
      elevation={3}
      sx={{
        width: "calc(100% - 260px)",
        ml: "260px",
        bgcolor: "background.paper",
        color: "text.primary"
      }}
    >

      <Toolbar>

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          🚀 CareerForge Dashboard
        </Typography>

        {/* Theme Button */}

        <IconButton
          color="inherit"
          onClick={toggleTheme}
        >

          {
            mode === "dark"

              ? <Brightness7 />

              : <Brightness4 />

          }

        </IconButton>

        {/* Notification */}

        <IconButton
          color="primary"
          onClick={openNotification}
        >

          <Badge
            badgeContent={4}
            color="error"
          >

            <Notifications />

          </Badge>

        </IconButton>

        <Menu
          anchorEl={notificationAnchor}
          open={Boolean(notificationAnchor)}
          onClose={closeNotification}
        >

          <MenuItem>📁 New Project Added</MenuItem>

          <MenuItem>🏆 Certification Completed</MenuItem>

          <MenuItem>💼 Interview Scheduled</MenuItem>

          <MenuItem>📚 Study Log Updated</MenuItem>

        </Menu>

        {/* Profile */}

        <Box
          onClick={openProfile}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            ml: 2
          }}
        >

          <Avatar
            sx={{
              bgcolor: "#2563EB",
              mr: 1
            }}
          >
            I
          </Avatar>

          <Typography fontWeight="bold">
            Ishita
          </Typography>

        </Box>

        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={closeProfile}
        >

          <MenuItem
            onClick={() => {

              navigate("/profile");

              closeProfile();

            }}
          >

            <ListItemIcon>

              <Person fontSize="small"/>

            </ListItemIcon>

            My Profile

          </MenuItem>

          <MenuItem>

            <ListItemIcon>

              <Settings fontSize="small"/>

            </ListItemIcon>

            Settings

          </MenuItem>

          <Divider/>

          <MenuItem
            onClick={logout}
          >

            <ListItemIcon>

              <Logout fontSize="small"/>

            </ListItemIcon>

            Logout

          </MenuItem>

        </Menu>

      </Toolbar>

    </AppBar>

  );

}