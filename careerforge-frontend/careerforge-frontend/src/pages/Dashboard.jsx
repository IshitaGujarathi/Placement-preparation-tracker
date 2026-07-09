import { useEffect, useState } from "react";
import dashboardService from "../services/dashboardService";

import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from "@mui/material";

export default function Dashboard() {

    const [data, setData] = useState({

        totalProjects: 0,

        totalDsa: 0

    });

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const response = await dashboardService.getData();

            setData(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <Box p={4}>

            <Typography
                variant="h4"
                mb={4}
            >

                Welcome to CareerForge 🚀

            </Typography>

            <Grid container spacing={3}>

                <Grid item xs={12} md={6}>

                    <Card>

                        <CardContent>

                            <Typography variant="h6">

                                Total Projects

                            </Typography>

                            <Typography
                                variant="h3"
                                color="primary"
                            >

                                {data.totalProjects}

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid item xs={12} md={6}>

                    <Card>

                        <CardContent>

                            <Typography variant="h6">

                                Total DSA Problems

                            </Typography>

                            <Typography
                                variant="h3"
                                color="success.main"
                            >

                                {data.totalDsa}

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

        </Box>

    );

}