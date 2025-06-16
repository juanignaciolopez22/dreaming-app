import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TROPHIES, getDreamersRanking } from "../../utils";
import RankedDreamer from "./components/RankedDreamer/index.jsx";

export default function HomeRanking({ loggedDreamer, dreamers }) {
  // Ranking: suma de likes de sueños publicados por dreamer
  const ranking = getDreamersRanking(dreamers);

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: "transparent",
        pt: 8,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "'Orbitron', sans-serif",
          mb: 4,
          textAlign: "center",
          fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
        }}
      >
        Hola, {loggedDreamer.name} .
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "#bdbdbd",
          fontWeight: 700,
          mb: 3,
          fontFamily: "'Orbitron', sans-serif",
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        Este es el ranking de Dreamers más soñadores:
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-end",
          mt: 2,
        }}
      >
        {ranking.map((d, i) => (
          <RankedDreamer
            key={d.name}
            dreamer={d}
            trophy={TROPHIES[i]?.icon}
            isFirst={i === 0}
          />
        ))}
      </Box>
    </Box>
  );
}
