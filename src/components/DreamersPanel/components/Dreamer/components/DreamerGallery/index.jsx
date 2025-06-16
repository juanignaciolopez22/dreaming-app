import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDreamersStore } from "../../../../../../store/dreamersStore";
import DreamGalleryLike from "./components/DreamGalleryLike";
import DreamGalleryPublish from "./components/DreamGalleryPublish";
const DreamerGallery = ({ dreams, ownerName }) => {
  const [index, setIndex] = useState(0);
  const { loggedDreamer, likeDream, publishDream } = useDreamersStore();

  const prev = () => setIndex((i) => (i === 0 ? dreams.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === dreams.length - 1 ? 0 : i + 1));
  const dream = dreams[index];
  const isOwner = loggedDreamer && loggedDreamer.name === ownerName;
  const isPublished = dream.publicado;
  // Solo puede likear si hay logueado y no es el dueño
  const canLike = loggedDreamer && loggedDreamer.name !== ownerName;

  return (
    <Box
      sx={{
        mt: 2,
        width: 260,
        bgcolor: "#232323",
        color: "#fff",
        borderRadius: 2,
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <IconButton onClick={prev} sx={{ color: "#fff" }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box sx={{ flex: 1, mx: 1, textAlign: "center" }}>
          <Typography variant="body2">{dream.text}</Typography>
          {dream.imageUrl && (
            <img
              src={dream.imageUrl}
              alt="Sueño generado"
              style={{
                width: "100%",
                borderRadius: 8,
                marginTop: 8,
                maxHeight: 120,
                objectFit: "cover",
              }}
            />
          )}
        </Box>
        <IconButton onClick={next} sx={{ color: "#fff" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Typography variant="caption" sx={{ mt: 1 }}>
        {index + 1} / {dreams.length}
      </Typography>
      <DreamGalleryLike
        canLike={canLike}
        onLike={() => likeDream(ownerName, index)}
        likes={dream.likes}
      />
      <DreamGalleryPublish
        isOwner={isOwner}
        isPublished={isPublished}
        onPublish={() => publishDream(ownerName, index)}
      />
    </Box>
  );
};

export default DreamerGallery;
