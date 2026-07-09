import { useEffect, useState } from "react";
import studyLogService from "../services/studyLogService";

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
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

export default function StudyLogs() {

    const [logs, setLogs] = useState([]);
    const [open, setOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        subject: "",
        hoursStudied: "",
        studyDate: ""
    });

    useEffect(() => {
        loadLogs();
    }, []);

    const loadLogs = async () => {
        const res = await studyLogService.getAll();
        setLogs(res.data);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = async () => {

        if (editingId == null)
            await studyLogService.create(form);
        else
            await studyLogService.update(editingId, form);

        loadLogs();
        setOpen(false);
    };

    const handleEdit = (log) => {

        setEditingId(log.id);

        setForm(log);

        setOpen(true);

    };

    const handleDelete = async (id) => {

        await studyLogService.delete(id);

        loadLogs();

    };

    return (

        <Box p={3}>

            <Box display="flex"
                 justifyContent="space-between"
                 mb={3}>

                <Typography variant="h4">
                    Study Logs
                </Typography>

                <Button
                    variant="contained"
                    onClick={() => {

                        setEditingId(null);

                        setForm({
                            subject:"",
                            hoursStudied:"",
                            studyDate:""
                        });

                        setOpen(true);

                    }}
                >

                    Add Study Log

                </Button>

            </Box>

            <TableContainer component={Paper}>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>Subject</TableCell>

                            <TableCell>Hours</TableCell>

                            <TableCell>Date</TableCell>

                            <TableCell>Action</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            logs.map(log=>(

                                <TableRow key={log.id}>

                                    <TableCell>{log.subject}</TableCell>

                                    <TableCell>{log.hoursStudied}</TableCell>

                                    <TableCell>{log.studyDate}</TableCell>

                                    <TableCell>

                                        <Button
                                            onClick={()=>handleEdit(log)}
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            color="error"
                                            onClick={()=>handleDelete(log.id)}
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
                onClose={()=>setOpen(false)}
                fullWidth
            >

                <DialogTitle>

                    Study Log

                </DialogTitle>

                <DialogContent>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Hours Studied"
                        name="hoursStudied"
                        type="number"
                        value={form.hoursStudied}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        type="date"
                        name="studyDate"
                        value={form.studyDate}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink:true
                        }}
                    />

                </DialogContent>

                <DialogActions>

                    <Button onClick={()=>setOpen(false)}>
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