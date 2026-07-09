import { useState } from "react";
import {
    Button,
    Paper,
    TextField,
    Typography,
    Container
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";

export default function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        fullName: "",
        email: "",
        password: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await authService.register(form);

            alert(res.data);

            navigate("/login");

        } catch (err) {

            alert(
                err.response?.data?.message ||
                "Registration Failed"
            );

        }

    };

    return (

        <Container maxWidth="sm">

            <Paper sx={{ mt: 8, p: 4 }}>

                <Typography variant="h4" mb={3}>
                    Register
                </Typography>

                <form onSubmit={handleSubmit}>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Full Name"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        type="password"
                        label="Password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 3 }}
                    >
                        Register
                    </Button>

                </form>

                <Typography mt={3}>

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </Typography>

            </Paper>

        </Container>

    );

}