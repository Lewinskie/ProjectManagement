import { useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { useMutation } from "@apollo/client";
import { Button } from "@mui/material";

const DeleteProjectBtn = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    // Describe the variables topass in the mutation
    variables: { id: projectId },

    // Redirect to home page
    onCompleted: () => navigate("/"),

    // Refetch the updated projects
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <Button
      variant="outlined"
      onClick={deleteProject}
      color="error"
      size="small"
      style={{ margin: "2rem 0rem 0.5rem 0rem" }}
    >
      <Delete />
      &nbsp;delete Project
    </Button>
  );
};

export default DeleteProjectBtn;
