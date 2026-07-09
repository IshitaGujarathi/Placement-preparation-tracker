import { useEffect, useState } from "react";
import certificationService from "../services/certificationService";

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

export default function Certifications() {

    const [certifications, setCertifications] = useState([]);
    const [open, setOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        title: "",
        provider: "",
        issueDate: "",
        certificateUrl: ""
    });

    useEffect(() => {
        loadCertifications();
    }, []);

    const loadCertifications = async () => {
        const response = await certificationService.getAll();
        setCertifications(response.data);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = async () => {

        if (editingId == null)
            await certificationService.create(form);
        else
            await certificationService.update(editingId, form);

        loadCertifications();
        setOpen(false);

    };

    const handleEdit = (item) => {

        setEditingId(item.id);
        setForm(item);
        setOpen(true);

    };

    const handleDelete = async (id) => {

        await certificationService.delete(id);

        loadCertifications();

    };

    return (

        <Box p={3}>

            <Box
                display="flex"
                justifyContent="space-between"
                mb={3}
            >

                <Typography variant="h4">

                    Certifications

                </Typography>

                <Button
                    variant="contained"
                    onClick={() => {

                        setEditingId(null);

                        setForm({

                            title: "",
                            provider: "",
                            issueDate: "",
                            certificateUrl: ""

                        });

                        setOpen(true);

                    }}
                >

                    Add Certification

                </Button>

            </Box>

            <TableContainer component={Paper}>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>Title</TableCell>

                            <TableCell>Provider</TableCell>

                            <TableCell>Issue Date</TableCell>

                            <TableCell>Certificate</TableCell>

                            <TableCell>Action</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            certifications.map(item => (

                                <TableRow key={item.id}>

                                    <TableCell>{item.title}</TableCell>

                                    <TableCell>{item.provider}</TableCell>

                                    <TableCell>{item.issueDate}</TableCell>

                                    <TableCell>{item.certificateUrl}</TableCell>

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

                    Certification

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
                        label="Provider"
                        name="provider"
                        value={form.provider}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        type="date"
                        name="issueDate"
                        value={form.issueDate}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Certificate URL"
                        name="certificateUrl"
                        value={form.certificateUrl}
                        onChange={handleChange}
                    />

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