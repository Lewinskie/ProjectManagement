import { Grid, MenuItem, Modal, Select, TextField } from "@mui/material";
import { useState } from "react";
import { Buttons, IconButtons } from "./Buttons";
import { Cancel, Menu } from "@mui/icons-material";
import { Typographies } from "./Typographies";
import { GET_CLIENTS } from "../queries/clientQueries";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";

const AddProjectModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");

  // Get clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS);

  // Add project
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name,
      description,
      clientId,
      status,
    },
    // you can use this to update the cache after the mutation has been executed
    // refetchQueries: [{ query: GET_PROJECTS }],

    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e, error, success) => {
    e.preventDefault();
    console.log(name, description, clientId);

    // Data validation
    if (name === "" || description === "" || clientId === "") {
      return alert("Please fill in all the fields");
    }
    handleClose();

    // Call the mutation
    addProject(name, description, clientId);
    setName("");
    setDescription("");
    setClientId("");
  };
  if (loading) return "Loading...";
  if (error) return "Something went wrong";
  return (
    !loading &&
    !error && (
      <>
        <Buttons
          variant="contained"
          onClick={handleOpen}
          style={{ margin: "2rem 0rem" }}
          sx={{ color: "white", background: "#00bcd4" }}
        >
          <Menu />
          &nbsp; new project
        </Buttons>
        <Modal open={open}>
          <Grid
            container
            style={{
              background: "white",

              borderRadius: "0.5rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              xl={11}
              style={{ padding: "1rem" }}
            >
              <Typographies variant="h5">Add Project</Typographies>
            </Grid>
            <Grid
              item
              xs={1}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <IconButtons onClick={handleClose} sx={{ color: "black" }}>
                <Cancel />
              </IconButtons>
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
              <Typographies variant="subtitle">Project Name:</Typographies>
              <TextField
                type="text"
                fullWidth
                placeholder="Name"
                style={{ marginBottom: "0.5rem" }}
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Typographies variant="subtitle">Description:</Typographies>
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
              <Typographies variant="subtitle">Status:</Typographies>
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
              <Typographies variant="subtitle">Client Id:</Typographies>
              <Select
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
              </Select>

              <Buttons type="submit" onClick={handleSubmit} variant="outlined">
                submit
              </Buttons>
            </Grid>
          </Grid>
        </Modal>
      </>
    )
  );
};

export default AddProjectModal;
