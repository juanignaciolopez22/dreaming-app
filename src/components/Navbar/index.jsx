import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "rgba(35,35,35,0.7)"}}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Button color="inherit" sx={{ textTransform: "none", mx: 2 }}>
          Home
        </Button>
        <Button color="inherit" sx={{ textTransform: "none", mx: 2 }}>
          Dreamers
        </Button>
        <Button color="inherit" sx={{ textTransform: "none", mx: 2 }}>
          Dreams Gallery
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;