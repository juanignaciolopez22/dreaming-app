import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useTypewriter } from "../../utils";

export default function HomeWelcome() {
  const fullText = "Bienvenido, futuro soñador.";
  const displayed = useTypewriter(fullText, 120);

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
