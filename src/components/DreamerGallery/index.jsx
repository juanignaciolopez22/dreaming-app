import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DreamerGallery = ({ dreams }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? dreams.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === dreams.length - 1 ? 0 : i + 1));
  const dream = dreams[index];

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
    </Box>
  );
};

export default DreamerGallery;
