import { useEffect, useState } from "react";
import projectService from "../services/projectService";

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    projectName: "",
    description: "",
    githubLink: "",
    status: "PLANNING",
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await projectService.getAll();
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = () => {
    setEditingId(null);

    setForm({
      projectName: "",
      description: "",
      githubLink: "",
      status: "PLANNING",
    });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        await projectService.create(form);
      } else {
        await projectService.update(editingId, form);
      }

      loadProjects();
      handleClose();
    } catch (error) {
      console.error(error);
      alert("Unable to save project");
    }
  };

  const handleEdit = (project) => {
    setEditingId(project.id);

    setForm({
      projectName: project.projectName,
      description: project.description,
      githubLink: project.githubLink,
      status: project.status,
    });

    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await projectService.delete(id);
      loadProjects();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4">Projects</Typography>

        <Button variant="contained" onClick={handleOpen}>
          Add Project
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>GitHub</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.id}</TableCell>

                <TableCell>{project.projectName}</TableCell>

                <TableCell>{project.description}</TableCell>

                <TableCell>{project.githubLink}</TableCell>

                <TableCell>{project.status}</TableCell>

                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleEdit(project)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ ml: 1 }}
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">

        <DialogTitle>
          {editingId === null ? "Add Project" : "Edit Project"}
        </DialogTitle>

        <DialogContent>

          <TextField
            margin="normal"
            fullWidth
            label="Project Name"
            name="projectName"
            value={form.projectName}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            fullWidth
            multiline
            rows={3}
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            fullWidth
            label="GitHub Link"
            name="githubLink"
            value={form.githubLink}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            fullWidth
            select
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <MenuItem value="PLANNING">PLANNING</MenuItem>
            <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
            <MenuItem value="COMPLETED">COMPLETED</MenuItem>
          </TextField>

        </DialogContent>

        <DialogActions>

          <Button onClick={handleClose}>
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