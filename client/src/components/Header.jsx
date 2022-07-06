import { AppBar, Toolbar } from "@mui/material";
import { Links } from "./Links";
import { Typographies } from "./Typographies";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ background: "white" }}>
        <Links to={"/"} style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typographies
              variant="h4"
              style={{ color: "black", textDecoration: "none" }}
            >
              LOGO
            </Typographies>
            <Typographies variant="h6" style={{ padding: "0 1rem" }}>
              Project Management
            </Typographies>
          </div>
        </Links>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
