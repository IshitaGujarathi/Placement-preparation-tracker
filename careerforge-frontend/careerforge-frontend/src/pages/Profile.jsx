import { Avatar, Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Profile() {

    const [profile, setProfile] = useState({

        fullName: "Ishita Gujarathi",
        email: "ishita@gmail.com",
        college: "R.C. Patel Institute of Technology",
        branch: "Computer Engineering",
        graduationYear: "2027",
        github: "",
        linkedin: ""

    });

    const handleChange = (e) => {

        setProfile({

            ...profile,

            [e.target.name]: e.target.value

        });

    };

    const handleSave = () => {

        alert("Profile Updated Successfully");

    };

    return (

        <Box p={4}>

            <Typography
                variant="h4"
                gutterBottom
            >

                My Profile

            </Typography>

            <Card>

                <CardContent>

                    <Box
                        display="flex"
                        justifyContent="center"
                        mb={3}
                    >

                        <Avatar
                            sx={{
                                width:120,
                                height:120,
                                fontSize:40
                            }}
                        >

                            I

                        </Avatar>

                    </Box>

                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6}>

                            <TextField
                                fullWidth
                                label="Full Name"
                                name="fullName"
                                value={profile.fullName}
                                onChange={handleChange}
                            />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                            />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <TextField
                                fullWidth
                                label="College"
                                name="college"
                                value={profile.college}
                                onChange={handleChange}
                            />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <TextField
                                fullWidth
                                label="Branch"
                                name="branch"
                                value={profile.branch}
                                onChange={handleChange}
                            />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <TextField
                                fullWidth
                                label="Graduation Year"
                                name="graduationYear"
                                value={profile.graduationYear}
                                onChange={handleChange}
                            />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <TextField
                                fullWidth
                                label="GitHub"
                                name="github"
                                value={profile.github}
                                onChange={handleChange}
                            />

                        </Grid>

                        <Grid item xs={12}>

                            <TextField
                                fullWidth
                                label="LinkedIn"
                                name="linkedin"
                                value={profile.linkedin}
                                onChange={handleChange}
                            />

                        </Grid>

                    </Grid>

                    <Box mt={3}>

                        <Button
                            variant="contained"
                            onClick={handleSave}
                        >

                            Save Profile

                        </Button>

                    </Box>

                </CardContent>

            </Card>

        </Box>

    );

}