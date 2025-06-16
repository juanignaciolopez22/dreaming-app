import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useDreamersStore } from "../../../../store/dreamersStore";
import NotificationsMenu from "./components/NotificationsMenu";

function Navbar() {
  const { loggedDreamer } = useDreamersStore();

  return (
    <AppBar position="static" sx={{ background: "rgba(35,35,35,0.7)" }}>
      <Toolbar sx={{ justifyContent: "center", position: "relative" }}>
        <Button
          component={Link}
          to="/"
          color="inherit"
          sx={{ textTransform: "none", mx: 2 }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/dreamers"
          color="inherit"
          sx={{ textTransform: "none", mx: 2 }}
        >
          Dreamers
        </Button>
        <Button
          component={Link}
          to="/gallery"
          color="inherit"
          sx={{ textTransform: "none", mx: 2 }}
        >
          Dreams Gallery
        </Button>
        {loggedDreamer && <NotificationsMenu />}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
