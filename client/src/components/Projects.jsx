import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";
import { Grid } from "@mui/material";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;
  const { projects } = data;
  console.log(projects);

  return (
    <Grid container spacing={2}>
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <p>No projects found</p>
      )}
    </Grid>
  );
};

export default Projects;
