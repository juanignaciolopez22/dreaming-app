import { useState } from "react";
import Box from "@mui/material/Box";
import Dream from "./components/Dream";
import DreamerGallery from "./components/DreamerGallery";
import { useDreamersStore } from "../../../../store/dreamersStore";
import DreamerLoginDialog from "./components/DreamerLoginDialog";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import DreamerCard from "./components/DreamerCard";

// Genera un color pastel aleatorio en formato HSL
function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
}

const Dreamer = ({ name, image, password }) => {
  const [showNote, setShowNote] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const { dreamers } = useDreamersStore();
  const dreamer = dreamers.find((d) => d.name === name);
  const dreams = dreamer?.dreams || [];
  const [avatarColor] = useState(getRandomPastelColor);
  const [openDialog, setOpenDialog] = useState(false);
  const { addDreamToLoggedDreamer } = useDreamersStore();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  // Zustand global login
  const { loggedDreamer, loginDreamer, logoutDreamer } = useDreamersStore();

  // ¿Está logueado alguien?
  const isAnyAuthenticated = !!loggedDreamer;

  // ¿Está logueado este dreamer?
  const isOwnDreamer = loggedDreamer?.name === name;

  // Guardar sueño solo si es el propio dreamer
  const handleSaveDream = (dream, imageUrl) => {
    if (!isOwnDreamer) return;
    addDreamToLoggedDreamer({ text: dream, imageUrl });
    setShowNote(false);
  };

  // Login al hacer click en avatar/nombre si no hay sesión
  const handleLogin = () => {
    if (isAnyAuthenticated) return;
    setOpenDialog(true); // Abre el Dialog para pedir la contraseña
  };

  // Logout (opcional, solo si es el propio dreamer)
  const handleLogout = () => {
    logoutDreamer();
    setShowNote(false);
    setShowGallery(false);
  };

  // Mostrar galería: si hay sesión, muestra; si no, avisa
  const handleShowGallery = (e) => {
    e.stopPropagation();
    if (!isAnyAuthenticated) {
      setSnackbar({
        open: true,
        message: "Debes loguearte en tu avatar para ver sueños.",
        severity: "warning",
      });
      return;
    }
    setShowGallery((prev) => !prev);
  };

  // Mostrar/cargar sueño: solo si es el propio dreamer
  const handleShowNote = () => {
    if (!isAnyAuthenticated) {
      handleLogin();
      return;
    }
    if (!isOwnDreamer) return;
    setShowNote((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        m: 2,
      }}
    >
      <DreamerCard
        name={name}
        image={image}
        avatarColor={avatarColor}
        onAvatarClick={handleShowNote}
        onGalleryClick={handleShowGallery}
        showGallery={showGallery}
        dreams={dreams}
        isOwnDreamer={isOwnDreamer}
        onLogout={handleLogout}
      />
      <Box
        sx={{
          minHeight: 80,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isOwnDreamer && showNote ? (
          <>
            <Box sx={{ p: 2, minWidth: 220 }}>
              <Dream onSave={handleSaveDream} dreamerName={name}/>
            </Box>
            {showGallery && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <DreamerGallery dreams={dreams} ownerName={name} />
              </Box>
            )}
          </>
        ) : (
          showGallery && (
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <DreamerGallery dreams={dreams} ownerName={name} />
            </Box>
          )
        )}
      </Box>
      <DreamerLoginDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onLogin={() => {
          loginDreamer(name, password);
          setShowNote(false);
          setShowGallery(false);
          setOpenDialog(false);
        }}
        password={password}
      />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          elevation={6}
          variant="filled"
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default Dreamer;
