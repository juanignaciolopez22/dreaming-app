import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

export default function DreamPublishedCard({ dream }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        width: 180,
        height: 180,
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        bgcolor: "#232323",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/gallery/${dream.id}`)}
    >
      <img
        src={dream.imageUrl}
        alt={dream.text}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {/* Avatar del autor en la esquina inferior izquierda */}
      <Avatar
        src={dream.ownerImage || undefined}
        sx={{
          position: "absolute",
          left: 8,
          bottom: 8,
          width: 36,
          height: 36,
          border: "2px solid #fff",
          bgcolor: "#444",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {!dream.ownerImage && dream.owner[0]}
      </Avatar>
      {/* Likes en la esquina inferior derecha */}
      <Box
        sx={{
          position: "absolute",
          right: 10,
          bottom: 10,
          background: "rgba(0,0,0,0.6)",
          borderRadius: 2,
          px: 1,
          color: "#fff",
          fontWeight: 600,
          fontSize: 15,
          display: "flex",
          alignItems: "center",
        }}
      >
        ❤️ {dream.likes || 0}
      </Box>
    </Box>
  );
}
