import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddClientModal />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddProjectModal />
        </Grid>
      </Grid>
      <Projects />
      <hr style={{ margin: "2rem 0rem" }} />
      <Clients />
    </>
  );
};

export default Home;
