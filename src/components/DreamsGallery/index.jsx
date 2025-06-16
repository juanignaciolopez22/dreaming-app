import { useDreamersStore } from "../../store/dreamersStore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DreamPublishedCard from "./components/DreamPublishedCard";
function DreamsGallery() {
  const { dreamers } = useDreamersStore();

  // Obtener todos los sueños publicados con info del autor
  const publicados = dreamers.flatMap((d) =>
    (d.dreams || [])
      .filter((s) => s.publicado && s.imageUrl)
      .map((s) => ({
        ...s,
        owner: d.name,
        ownerImage: d.image,
      }))
  );

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {publicados.length === 0 && (
          <Typography variant="h6" sx={{ color: "#aaa" }}>
            No hay sueños publicados aún.
          </Typography>
        )}
        {publicados.map((dream) => (
          <DreamPublishedCard key={dream.imageUrl} dream={dream} />
        ))}
      </Box>
    </Box>
  );
}

export default DreamsGallery;
