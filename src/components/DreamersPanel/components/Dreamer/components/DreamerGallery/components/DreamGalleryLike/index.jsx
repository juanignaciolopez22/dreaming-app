import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
function DreamGalleryLike({ canLike, onLike, likes }) {
  if (canLike) {
    return (
      <IconButton onClick={onLike} sx={{ color: "#e53935", mt: 1 }}>
        <FavoriteIcon />
        <span style={{ marginLeft: 6, color: "#fff", fontWeight: 600 }}>
          {likes || 0}
        </span>
      </IconButton>
    );
  }
  return (
    <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
      <FavoriteIcon sx={{ color: "#888" }} />
      <span style={{ marginLeft: 6, color: "#fff", fontWeight: 600 }}>
        {likes || 0}
      </span>
    </Box>
  );
}
export default DreamGalleryLike;