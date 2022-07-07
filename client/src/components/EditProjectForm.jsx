import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECT } from "../queries/projectQueries";
import { GET_CLIENTS } from "../queries/clientQueries";
import { useQuery } from "@apollo/client";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  // const [clientId, setClientId] = useState(project.clientId);
  const [status, setStatus] = useState("new");

  // Get clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ margin: " 0.5rem 0rem" }}>
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
        {/* <Typography variant="subtitle">Client Id:</Typography> */}
        {/* <Select
          type="text"
          fullWidth
          size="small"
          value={clientId}
          style={{ marginBottom: "0.5rem" }}
          onChange={(e) => setClientId(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">Select Client</MenuItem>
          {data.clients.map((client) => (
            <MenuItem value={client.id} key={client.id}>
              {client.name}
            </MenuItem>
          ))}
        </Select> */}

        <Button
          type="submit"
          // onClick={handleSubmit}
          variant="outlined"
        >
          submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditProjectForm;
