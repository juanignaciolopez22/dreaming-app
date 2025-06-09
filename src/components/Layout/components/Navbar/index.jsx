import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useDreamersStore } from "../../../../store/dreamersStore";

function Navbar() {
  const { loggedDreamer, notifications, markNotificationRead } = useDreamersStore();
  const unread = notifications.filter((n) => !n.read).length;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

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
        {loggedDreamer && (
          <Box sx={{ position: "absolute", right: 24 }}>
            <IconButton color="inherit" onClick={handleOpen}>
              <Badge badgeContent={unread} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  bgcolor: "#232323",
                  color: "#fff",
                  minWidth: 280,
                },
              }}
            >
              {notifications.length === 0 ? (
                <MenuItem sx={{ color: "#fff" }}>No tienes notificaciones</MenuItem>
              ) : (
                notifications.map((notif) => (
                  <MenuItem
                    key={notif.id}
                    onClick={() => {
                      markNotificationRead(notif.id);
                      handleClose();
                    }}
                    sx={{
                      color: notif.read ? "#bdbdbd" : "#fff",
                      fontWeight: notif.read ? 400 : 700,
                      bgcolor: notif.read ? "transparent" : "#333",
                      "&:hover": { bgcolor: "#444" },
                    }}
                  >
                    {notif.text}
                  </MenuItem>
                ))
              )}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;