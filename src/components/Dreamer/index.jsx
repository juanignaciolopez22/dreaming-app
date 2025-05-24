import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Dream from "../Dream";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DreamerGallery from "../DreamerGallery";

// Genera un color pastel aleatorio en formato HSL
function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
}

const Dreamer = ({ name }) => {
  const [showNote, setShowNote] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [dreams, setDreams] = useState([]);
  const [avatarColor] = useState(getRandomPastelColor);

  const handleSaveDream = (dream, imageUrl) => {
    setDreams((prev) => [...prev, { text: dream, imageUrl }]);
    setShowNote(false);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, m: 2 }}>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={() => setShowNote((prev) => !prev)}
      >
        <Avatar
          sx={{ width: 90, height: 90, fontSize: 48, bgcolor: avatarColor }}
        >
          {name[0]}
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
          onClick={(e) => {
            e.stopPropagation();
            setShowGallery((prev) => !prev);
          }}
          disabled={dreams.length === 0}
        >
          {showGallery ? "Ocultar sueños" : "Ver sueños"}
        </Button>
      </Box>
      {showNote && (
        <Box sx={{ p: 2, minWidth: 220 }}>
          <Dream onSave={handleSaveDream} />
        </Box>
      )}
      {showGallery && <DreamerGallery dreams={dreams} />}
    </Box>
  );
};

export default Dreamer;
