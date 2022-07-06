import { Grid, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { Buttons, IconButtons } from "./Buttons";
import { Person, Cancel } from "@mui/icons-material";
import { Typographies } from "./Typographies";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddClientModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Mutation for adding client
  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e, error, success) => {
    e.preventDefault();
    console.log(name, email, phone);

    // Data validation
    if (name === "" || email === "" || phone === "") {
      return alert("Please fill in all the fields");
    }
    handleClose();
    addClient(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <>
      <Buttons
        variant="contained"
        onClick={handleOpen}
        style={{ margin: "2rem 0rem" }}
        sx={{ color: "white", background: "#00bcd4" }}
      >
        <Person />
        &nbsp; add client
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
            <Typographies variant="h5">Add Client</Typographies>
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
            <TextField
              type="text"
              fullWidth
              label="Name"
              style={{ marginBottom: "0.5rem" }}
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              type="text"
              fullWidth
              label="Email"
              style={{ marginBottom: "0.5rem" }}
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="text"
              fullWidth
              label="Phone"
              size="small"
              value={phone}
              style={{ marginBottom: "0.5rem" }}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Buttons type="submit" onClick={handleSubmit} variant="outlined">
              submit
            </Buttons>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default AddClientModal;
