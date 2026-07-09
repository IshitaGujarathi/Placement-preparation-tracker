import { useEffect, useState } from "react";
import dsaService from "../services/dsaService";

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";

export default function Dsa() {

    const [problems, setProblems] = useState([]);

    const [open, setOpen] = useState(false);

    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({

        title: "",
        platform: "",
        difficulty: "EASY",
        status: "NOT_STARTED"

    });

    useEffect(() => {

        loadProblems();

    }, []);

    const loadProblems = async () => {

        const res = await dsaService.getAll();

        setProblems(res.data);

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSave = async () => {

        if (editingId == null)

            await dsaService.create(form);

        else

            await dsaService.update(editingId, form);

        loadProblems();

        setOpen(false);

    };

    const handleEdit = (problem) => {

        setEditingId(problem.id);

        setForm(problem);

        setOpen(true);

    };

    const handleDelete = async (id) => {

        await dsaService.delete(id);

        loadProblems();

    };

    return (

        <Box p={3}>

            <Box
                display="flex"
                justifyContent="space-between"
                mb={3}
            >

                <Typography variant="h4">

                    DSA Tracker

                </Typography>

                <Button
                    variant="contained"
                    onClick={() => {

                        setEditingId(null);

                        setForm({

                            title: "",

                            platform: "",

                            difficulty: "EASY",

                            status: "NOT_STARTED"

                        });

                        setOpen(true);

                    }}
                >

                    Add Problem

                </Button>

            </Box>

            <TableContainer component={Paper}>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>Title</TableCell>

                            <TableCell>Platform</TableCell>

                            <TableCell>Difficulty</TableCell>

                            <TableCell>Status</TableCell>

                            <TableCell>Action</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            problems.map(problem => (

                                <TableRow key={problem.id}>

                                    <TableCell>{problem.title}</TableCell>

                                    <TableCell>{problem.platform}</TableCell>

                                    <TableCell>{problem.difficulty}</TableCell>

                                    <TableCell>{problem.status}</TableCell>

                                    <TableCell>

                                        <Button
                                            onClick={() => handleEdit(problem)}
                                        >

                                            Edit

                                        </Button>

                                        <Button
                                            color="error"
                                            onClick={() => handleDelete(problem.id)}
                                        >

                                            Delete

                                        </Button>

                                    </TableCell>

                                </TableRow>

                            ))

                        }

                    </TableBody>

                </Table>

            </TableContainer>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
            >

                <DialogTitle>

                    DSA Problem

                </DialogTitle>

                <DialogContent>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Platform"
                        name="platform"
                        value={form.platform}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        select
                        margin="normal"
                        label="Difficulty"
                        name="difficulty"
                        value={form.difficulty}
                        onChange={handleChange}
                    >

                        <MenuItem value="EASY">EASY</MenuItem>

                        <MenuItem value="MEDIUM">MEDIUM</MenuItem>

                        <MenuItem value="HARD">HARD</MenuItem>

                    </TextField>

                    <TextField
                        fullWidth
                        select
                        margin="normal"
                        label="Status"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    >

                        <MenuItem value="NOT_STARTED">
                            NOT_STARTED
                        </MenuItem>

                        <MenuItem value="IN_PROGRESS">
                            IN_PROGRESS
                        </MenuItem>

                        <MenuItem value="COMPLETED">
                            COMPLETED
                        </MenuItem>

                    </TextField>

                </DialogContent>

                <DialogActions>

                    <Button onClick={() => setOpen(false)}>

                        Cancel

                    </Button>

                    <Button
                        variant="contained"
                        onClick={handleSave}
                    >

                        Save

                    </Button>

                </DialogActions>

            </Dialog>

        </Box>

    );

}