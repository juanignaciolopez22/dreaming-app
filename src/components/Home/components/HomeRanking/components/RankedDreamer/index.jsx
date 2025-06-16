import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export default function RankedDreamer({ dreamer, trophy, isFirst }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#232323",
        borderRadius: 3,
        p: 3,
        minWidth: 160,
        boxShadow: 4,
        border: isFirst ? "2px solid #ffd700" : "2px solid #444",
        transform: isFirst ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.2s",
      }}
    >
      {trophy}
      <Avatar
        src={dreamer.image || undefined}
        sx={{
          width: 64,
          height: 64,
          mt: 1,
          mb: 1,
          fontSize: 32,
          bgcolor: "#444",
          border: "2px solid #fff",
        }}
      >
        {!dreamer.image && dreamer.name[0]}
      </Avatar>
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "'Orbitron', sans-serif",
          mt: 1,
          mb: 0.5,
          textAlign: "center",
        }}
      >
        {dreamer.name}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#ffd700",
          fontWeight: 700,
          fontSize: "1.3rem",
          textAlign: "center",
        }}
      >
        {dreamer.likes} Likes
      </Typography>
    </Box>
  );
}