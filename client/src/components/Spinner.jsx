import { CircularProgress, Box } from "@mui/material";
const Spinner = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
