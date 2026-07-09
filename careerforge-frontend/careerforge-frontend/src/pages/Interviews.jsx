import { useEffect, useState } from "react";
import interviewService from "../services/interviewService";

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

export default function Interviews() {

    const [interviews, setInterviews] = useState([]);

    const [open, setOpen] = useState(false);

    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({

        company: "",
        role: "",
        interviewDate: "",
        result: ""

    });

    useEffect(() => {

        loadInterviews();

    }, []);

    const loadInterviews = async () => {

        const res = await interviewService.getAll();

        setInterviews(res.data);

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSave = async () => {

        if (editingId == null)

            await interviewService.create(form);

        else

            await interviewService.update(editingId, form);

        loadInterviews();

        setOpen(false);

    };

    const handleEdit = (item) => {

        setEditingId(item.id);

        setForm(item);

        setOpen(true);

    };

    const handleDelete = async (id) => {

        await interviewService.delete(id);

        loadInterviews();

    };

    return (

        <Box p={3}>

            <Box
                display="flex"
                justifyContent="space-between"
                mb={3}
            >

                <Typography variant="h4">

                    Interview Tracker

                </Typography>

                <Button
                    variant="contained"
                    onClick={() => {

                        setEditingId(null);

                        setForm({

                            company: "",

                            role: "",

                            interviewDate: "",

                            result: ""

                        });

                        setOpen(true);

                    }}
                >

                    Add Interview

                </Button>

            </Box>

            <TableContainer component={Paper}>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>Company</TableCell>

                            <TableCell>Role</TableCell>

                            <TableCell>Date</TableCell>

                            <TableCell>Result</TableCell>

                            <TableCell>Action</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            interviews.map(item => (

                                <TableRow key={item.id}>

                                    <TableCell>{item.company}</TableCell>

                                    <TableCell>{item.role}</TableCell>

                                    <TableCell>{item.interviewDate}</TableCell>

                                    <TableCell>{item.result}</TableCell>

                                    <TableCell>

                                        <Button
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            color="error"
                                            onClick={() => handleDelete(item.id)}
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

                    Interview

                </DialogTitle>

                <DialogContent>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        type="date"
                        name="interviewDate"
                        value={form.interviewDate}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />

                    <TextField
                        fullWidth
                        select
                        margin="normal"
                        label="Result"
                        name="result"
                        value={form.result}
                        onChange={handleChange}
                    >

                        <MenuItem value="Pending">Pending</MenuItem>

                        <MenuItem value="Selected">Selected</MenuItem>

                        <MenuItem value="Rejected">Rejected</MenuItem>

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