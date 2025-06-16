import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function DreamerCard({
  name,
  image,
  avatarColor,
  onAvatarClick,
  onGalleryClick,
  showGallery,
  dreams,
  isOwnDreamer,
  onLogout,
}) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {isOwnDreamer && (
        <Button
          variant="contained"
          sx={{
            mb: 2,
            width: 180,
            background: "#444",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: 2,
            "&:hover": { background: "#222" },
          }}
          onClick={onLogout}
        >
          Cerrar sesión
        </Button>
      )}
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={onAvatarClick}
      >
        <Avatar
          src={image || undefined}
          sx={{ width: 90, height: 90, fontSize: 48, bgcolor: avatarColor }}
        >
          {!image && name[0]}
        </Avatar>
        <Typography
          variant="h6"
          sx={{ mt: 1, fontWeight: "bold", color: "#fff" }}
        >
          {name}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            mt: 2,
            textTransform: "none",
            background: "#444",
            color: "#fff",
            fontWeight: 500,
            "&:hover": { background: "#222" },
          }}
          onClick={onGalleryClick}
          disabled={dreams.length === 0}
        >
          {showGallery ? "Ocultar sueños" : "Ver sueños"}
        </Button>
      </Box>
    </Box>
  );
}
