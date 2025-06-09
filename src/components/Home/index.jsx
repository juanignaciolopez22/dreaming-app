import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useDreamersStore } from "../../store/dreamersStore";
import { Link as RouterLink } from "react-router-dom";

const TROPHIES = [
  {
    icon: <EmojiEventsIcon sx={{ color: "#ffd700", fontSize: 40 }} />,
    label: "Oro",
  }, 
  {
    icon: <EmojiEventsIcon sx={{ color: "#c0c0c0", fontSize: 36 }} />,
    label: "Plata",
  }, 
  {
    icon: <EmojiEventsIcon sx={{ color: "#cd7f32", fontSize: 32 }} />,
    label: "Bronce",
  }, 
];

export default function Home() {
  const { loggedDreamer, dreamers } = useDreamersStore();
  const fullText = "Bienvenido, futuro soñador.";
  const [displayed, setDisplayed] = useState("");
  const delay = 120;

  useEffect(() => {
    if (loggedDreamer) return;
    let i = 0;
    let forward = true;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i));
      if (forward) {
        i++;
        if (i > fullText.length) {
          forward = false;
        }
      } else {
        i--;
        if (i < 0) {
          forward = true;
        }
      }
    }, delay);
    return () => clearInterval(interval);
  }, [loggedDreamer]);

  // Ranking: suma de likes de sueños publicados por dreamer
  const ranking = dreamers
    .map((d) => ({
      name: d.name,
      image: d.image,
      likes: (d.dreams || [])
        .filter((s) => s.publicado)
        .reduce((acc, s) => acc + (s.likes || 0), 0),
    }))
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  if (!loggedDreamer) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "transparent",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            letterSpacing: 2,
            fontFamily: "'Orbitron', sans-serif",
            borderRight:
              displayed.length < fullText.length ? "6px solid #fff" : "none",
            pr: 2,
            mb: 4,
            fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem", lg: "5rem" },
            textAlign: "center",
            lineHeight: 1.1,
            transition: "all 0.2s",
          }}
        >
          {displayed}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            mb: 2,
            textAlign: "center",
            fontWeight: 600,
            fontFamily: "'Orbitron', sans-serif",
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            whiteSpace: "nowrap",
          }}
        >
          Qué estás esperando para unirte a la comunidad?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            mb: 2,
            textAlign: "center",
            maxWidth: 600,
            fontFamily: "'Orbitron', sans-serif",
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            textDecoration: "underline",
            cursor: "pointer",
            transition: "color 0.2s",
            "&:hover": { color: "#fff" },
          }}
          component={RouterLink}
          to="/dreamers"
        >
          Empezá a soñar ahora.
        </Typography>
      </Box>
    );
  }

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
          color: "#bdbdbd", // gris claro en vez de azul
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
          <Box
            key={d.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#232323",
              borderRadius: 3,
              p: 3,
              minWidth: 160,
              boxShadow: 4,
              border: i === 0 ? "2px solid #ffd700" : "2px solid #444",
              transform: i === 0 ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.2s",
            }}
          >
            {TROPHIES[i]?.icon}
            <Avatar
              src={d.image || undefined}
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
              {!d.image && d.name[0]}
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
              {d.name}
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
              {d.likes} Likes
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
