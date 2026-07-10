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
  Typography,
} from "@mui/material";

export default function Certifications() {
  const [certifications, setCertifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    certificateName: "",
    organization: "",
    completionDate: "",
    certificateUrl: "",
  });

  useEffect(() => {
    loadCertifications();
  }, []);

  const loadCertifications = async () => {
    try {
      const response = await certificationService.getAll();
      setCertifications(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      if (editingId === null) {
        await certificationService.create(form);
      } else {
        await certificationService.update(editingId, form);
      }

      loadCertifications();

      setOpen(false);

      setEditingId(null);

      setForm({
        certificateName: "",
        organization: "",
        completionDate: "",
        certificateUrl: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);

    setForm({
      certificateName: item.certificateName,
      organization: item.organization,
      completionDate: item.completionDate,
      certificateUrl: item.certificateUrl,
    });

    setOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await certificationService.delete(id);
      loadCertifications();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Certifications
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            setEditingId(null);

            setForm({
              certificateName: "",
              organization: "",
              completionDate: "",
              certificateUrl: "",
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
              <TableCell>
                <strong>Certificate Name</strong>
              </TableCell>

              <TableCell>
                <strong>Organization</strong>
              </TableCell>

              <TableCell>
                <strong>Completion Date</strong>
              </TableCell>

              <TableCell>
                <strong>Certificate URL</strong>
              </TableCell>

              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {certifications.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.certificateName}</TableCell>

                <TableCell>{item.organization}</TableCell>

                <TableCell>{item.completionDate}</TableCell>

                <TableCell>{item.certificateUrl}</TableCell>

                <TableCell>
                  <Button onClick={() => handleEdit(item)}>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>
          {editingId === null
            ? "Add Certification"
            : "Edit Certification"}
        </DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Certificate Name"
            name="certificateName"
            value={form.certificateName}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Organization"
            name="organization"
            value={form.organization}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            type="date"
            label="Completion Date"
            name="completionDate"
            value={form.completionDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
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