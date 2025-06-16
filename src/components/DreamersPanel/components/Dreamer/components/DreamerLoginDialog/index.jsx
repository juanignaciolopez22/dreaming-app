import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";

export default function DreamerLoginDialog({
  open,
  onClose,
  onLogin,
  password
}) {
  const [passwordInput, setPasswordInput] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  const handleLogin = () => {
    if (passwordInput === password) {
      onLogin();
      setPasswordInput("");
    } else {
      setSnackbar({
        open: true,
        message: "Contraseña incorrecta.",
        severity: "error",
      });
      setPasswordInput("");
      onClose();
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
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
          <Button onClick={onClose} sx={{ color: "#fff" }}>
            Cancelar
          </Button>
          <Button
            onClick={handleLogin}
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
    </>
  );
}