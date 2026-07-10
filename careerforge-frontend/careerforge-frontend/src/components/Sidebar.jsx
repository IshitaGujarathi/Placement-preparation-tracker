import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

import {
  Dashboard,
  Folder,
  Code,
  Work,
  MenuBook,
  WorkspacePremium,
  Person,
  SmartToy,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const drawerWidth = 260;

const menus = [
  { text: "Dashboard", icon: <Dashboard />, path: "/" },
  { text: "Projects", icon: <Folder />, path: "/projects" },
  { text: "DSA", icon: <Code />, path: "/dsa" },
  { text: "Interviews", icon: <Work />, path: "/interviews" },
  { text: "Study Logs", icon: <MenuBook />, path: "/studylogs" },
  { text: "Certifications", icon: <WorkspacePremium />, path: "/certifications" },
  { text: "Profile", icon: <Person />, path: "/profile" },
  { text: "AI Assistant", icon: <SmartToy />, path: "/ai" },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          bgcolor: "#111827",
          color: "white",
          borderRight: "none",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ p: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            background:
              "linear-gradient(90deg,#3B82F6,#8B5CF6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CareerForge
        </Typography>

        <Typography
          sx={{
            color: "#9CA3AF",
            fontSize: 13,
          }}
        >
          AI Placement Tracker
        </Typography>
      </Box>

      <List sx={{ px: 2 }}>

        {menus.map((item) => (

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            key={item.text}
          >

            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                borderRadius: 3,
                mb: 1,
                color: "white",

                "&.active": {
                  bgcolor: "#2563EB",
                },

                "&:hover": {
                  bgcolor: "#1D4ED8",
                },
              }}
            >

              <ListItemIcon
                sx={{
                  color: "white",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />

            </ListItemButton>

          </motion.div>

        ))}

      </List>

    </Drawer>
  );
}