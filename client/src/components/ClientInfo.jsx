import { Email, Phone, Badge } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const ClientInfo = ({ client }) => {
  return (
    <Grid
      container
      style={{
        boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.1)",
        borderRadius: "0.5rem",
        padding: "1rem",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h6" style={{ color: "#8CBAE8" }}>
          Client Information
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          padding: "0.5rem",
          borderRadius: "0.3rem",
        }}
      >
        <Badge style={{ color: "#8CBAE8" }} />
        <Typography style={{ marginLeft: "1rem" }}>{client.name}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          padding: "0.5rem",
          borderRadius: "0.3rem",
        }}
      >
        <Email style={{ color: "#8CBAE8" }} />
        <Typography style={{ marginLeft: "1rem" }}>{client.email}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          padding: "0.5rem",
          borderRadius: "0.3rem",
        }}
      >
        <Phone style={{ color: "#8CBAE8" }} />
        <Typography style={{ marginLeft: "1rem" }}>{client.phone}</Typography>
      </Grid>
    </Grid>
  );
};

export default ClientInfo;
