import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { Buttons } from "./Buttons";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card>
        <CardHeader title={project.name} style={{ color: "#B6B6B6" }} />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Status:
          </Typography>
          <Typography variant="body2">{project.status}</Typography>
        </CardContent>
        <CardActions>
          <Buttons variant="outlined" size="small" onClick={handleView}>
            view
          </Buttons>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
