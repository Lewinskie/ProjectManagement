import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECT } from "../queries/projectQueries";
import { useNavigate } from "react-router-dom";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("new");

  const navigate = useNavigate();

  // Update project
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    // Describe the variables to pass in the mutation from props and state
    variables: { id: project.id, name, description, status },
    // Refetch the updated project
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],

    // Redirect to home page
    onCompleted: () => navigate("/"),
  });

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !status) {
      return alert("Please fill in all the fields");
    }
    updateProject(name, description, status);
  };

  return (
    <Grid container style={{ margin: "2rem 0rem" }}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          style={{ margin: " 0.5rem 0rem", color: "#8CBAE8" }}
        >
          Update Project Details
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ width: "100%", padding: "0rem 1rem 1rem 1rem" }}
      >
        <Typography variant="subtitle">Project Name:</Typography>
        <TextField
          type="text"
          fullWidth
          placeholder="Name"
          style={{ marginBottom: "0.5rem" }}
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Typography variant="subtitle">Description:</Typography>
        <TextField
          type="text"
          fullWidth
          placeholder="description"
          style={{ marginBottom: "0.5rem" }}
          size="small"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Typography variant="subtitle">Status:</Typography>
        <Select
          defaultValue={status}
          onChange={(e) => setStatus(e.target.value)}
          fullWidth
          size="small"
          style={{ marginBottom: "0.5rem" }}
        >
          <MenuItem value="new">Not Started</MenuItem>
          <MenuItem value="inProgress">In Progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>

        <Button type="submit" onClick={handleSubmit} variant="outlined">
          submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditProjectForm;
