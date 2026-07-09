import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {

    return (

        <AppBar
            position="fixed"
            sx={{
                zIndex:1201
            }}
        >

            <Toolbar>

                <Typography variant="h6">

                    CareerForge

                </Typography>

            </Toolbar>

        </AppBar>

    );

}