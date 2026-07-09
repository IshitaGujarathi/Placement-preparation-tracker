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
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
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

            const res = await authService.login(form);

            login(res.data.token);

            alert(res.data.message);

            navigate("/dashboard");

        } catch (err) {

            alert(
                err.response?.data?.message ||
                "Login Failed"
            );

        }

    };

    return (

        <Container maxWidth="sm">

            <Paper sx={{ mt: 8, p: 4 }}>

                <Typography variant="h4" mb={3}>
                    CareerForge Login
                </Typography>

                <form onSubmit={handleSubmit}>

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
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3 }}
                    >
                        Login
                    </Button>

                </form>

                <Typography mt={3}>

                    Don't have an account?

                    <Link to="/register">
                        Register
                    </Link>

                </Typography>

            </Paper>

        </Container>

    );

}