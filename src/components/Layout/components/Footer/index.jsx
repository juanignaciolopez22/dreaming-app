import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "rgba(35,35,35,0.7)",
        color: "#bbb",
        py: 2,
        textAlign: "center",
        fontFamily: "'Quicksand', 'Montserrat', Arial, sans-serif",
        letterSpacing: 2,
        fontSize: 14,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 200, fontSize: 15 }}>
        Hecho con sueño y café ☕️
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 900, fontSize: 13, mt: 2 }}>
        Para Alkemy 🚀
      </Typography>
    </Box>
  );
}

export default Footer;