import { Drawer, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const menuItems = [
    { text: "Dashboard", path: "/" },
    { text: "Projects", path: "/projects" },
    { text: "DSA Tracker", path: "/dsa" },
    { text: "Interviews", path: "/interviews" },
    { text: "Study Logs", path: "/studylogs" },
    { text: "Certifications", path: "/certifications" },
    { text: "Profile", path: "/profile" },
    { text: "AI Assistant", path: "/ai" }
];

export default function Sidebar() {

    return (

        <Drawer
            variant="permanent"
            sx={{
                width:220,
                "& .MuiDrawer-paper":{
                    width:220,
                    boxSizing:"border-box"
                }
            }}
        >

            <Toolbar/>

            <List>

                {

                    menuItems.map(item=>(

                        <ListItemButton
                            component={Link}
                            to={item.path}
                            key={item.text}
                        >

                            <ListItemText primary={item.text}/>

                        </ListItemButton>

                    ))

                }

            </List>

        </Drawer>

    );

}