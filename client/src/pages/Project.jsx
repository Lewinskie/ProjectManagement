import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { Button, Grid, Typography } from "@mui/material";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectBtn from "../components/DeleteProjectBtn";
import EditProjectForm from "../components/EditProjectForm";

const Project = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!loading && !error && (
        <Grid
          container
          style={{
            background: "linear-gradient(to bottom,white,#F8F8F8)",
            padding: "1rem",
            width: "fit-content",
            height: "fit-content",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            borderRadius: "0.5rem",
          }}
        >
          <Grid item xs={12}>
            <Button size="small" variant="outlined" onClick={handleClick}>
              back
            </Button>
            <Typography
              variant="h4"
              style={{ margin: " 0.5rem 0rem", color: "#8CBAE8" }}
            >
              {data.project.name}
            </Typography>
            <Typography variant="body1" style={{ margin: " 0.5rem 0rem" }}>
              {data.project.description}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: " 0.5rem 0rem",
              }}
            >
              <Typography variant="caption">
                Project Status:&nbsp;&nbsp;
              </Typography>
              <Typography style={{ fontWeight: "bold" }} variant="caption">
                {data.project.status}
              </Typography>
            </div>

            <ClientInfo client={data.project.client} />

            <EditProjectForm project={data.project} />
            <DeleteProjectBtn projectId={data.project.id} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Project;
