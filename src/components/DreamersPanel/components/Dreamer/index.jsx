import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Dream from "./components/Dream";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DreamerGallery from "./components/DreamerGallery";
import { useDreamersStore } from "../../../../store/dreamersStore";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
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
  const [passwordInput, setPasswordInput] = useState("");
  const { addDreamToLoggedDreamer } = useDreamersStore();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
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
      {/* Botón cerrar sesión visible y arriba del avatar */}
      {isOwnDreamer && (
        <Button
          variant="contained"
          sx={{
            mb: 2,
            width: 180,
            background: "#444",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: 2,
            "&:hover": { background: "#222" },
          }}
          onClick={handleLogout}
        >
          Cerrar sesión
        </Button>
      )}
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={handleShowNote}
      >
        <Avatar
          src={image || undefined}
          sx={{ width: 90, height: 90, fontSize: 48, bgcolor: avatarColor }}
        >
          {!image && name[0]}
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
          onClick={handleShowGallery}
          disabled={dreams.length === 0}
        >
          {showGallery ? "Ocultar sueños" : "Ver sueños"}
        </Button>
      </Box>
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
              <Dream onSave={handleSaveDream} />
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
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: {
            background: "#232323",
            color: "#fff",
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle sx={{ color: "#fff", background: "#232323" }}>
          Ingresar contraseña
        </DialogTitle>
        <DialogContent sx={{ background: "#232323" }}>
          <TextField
            autoFocus
            margin="dense"
            label="Contraseña"
            type="password"
            fullWidth
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            inputProps={{ maxLength: 4 }}
            sx={{
              input: { color: "#fff" },
              label: { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#fff" },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ background: "#232323" }}>
          <Button onClick={() => setOpenDialog(false)} sx={{ color: "#fff" }}>
            Cancelar
          </Button>
          <Button
            onClick={() => {
              if (passwordInput === password) {
                loginDreamer(name, password);
                setShowNote(false);
                setShowGallery(false);
                setOpenDialog(false);
                setPasswordInput("");
              } else {
                setOpenDialog(false);
                setSnackbar({
                  open: true,
                  message: "Contraseña incorrecta.",
                  severity: "error",
                });
                setPasswordInput("");
              }
            }}
            variant="contained"
            sx={{
              background: "#444",
              color: "#fff",
              "&:hover": { background: "#222" },
            }}
          >
            Ingresar
          </Button>
        </DialogActions>
      </Dialog>

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
