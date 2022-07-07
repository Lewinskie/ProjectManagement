import { Grid, Typography } from "@mui/material";
import { Buttons } from "../components/Buttons";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Grid
      container
      style={{
        width: "100%",
        height: "90vh",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          background: "url(/images/404.png)",
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundPosition: "bottom left",
        }}
      >
        <div
          style={{
            width: "fit-content",
            background: "rgba(255,255,255,0.5)",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <Typography variant="h4" style={{ color: "red" }}>
            404
          </Typography>
          <Typography
            variant="h6"
            style={{
              margin: " 0rem 0rem 1rem 0rem",
              color: "3px 2px 57px -1px rgba(0,0,0,0.75)",
            }}
          >
            Sorry, we couldn't find the page you were looking for.
          </Typography>
          <Buttons variant="outlined" size="large" onClick={handleClick}>
            Take me home
          </Buttons>
        </div>
      </Grid>
    </Grid>
  );
};

export default NotFound;
