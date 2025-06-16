import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function DreamGalleryPublish({ isOwner, isPublished, onPublish }) {
  if (isOwner && !isPublished) {
    return (
      <Button
        variant="outlined"
        sx={{ mt: 2, color: "#fff", borderColor: "#444" }}
        onClick={onPublish}
      >
        Publicar en galería
      </Button>
    );
  }
  if (isPublished) {
    return (
      <Typography variant="caption" sx={{ mt: 1, color: "#90caf9" }}>
        Publicado en galería
      </Typography>
    );
  }
}
export default DreamGalleryPublish;