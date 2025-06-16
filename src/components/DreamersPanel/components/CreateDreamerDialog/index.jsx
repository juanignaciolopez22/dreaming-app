import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";

export default function DreamerCreateDialog({ open, onClose, onAddDreamer }) {
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [error, setError] = useState(false);
  const [pwError, setPwError] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setNewImage(ev.target.result);
      reader.readAsDataURL(file);
    } else {
      setNewImage(null);
    }
  };

  const handleAdd = () => {
    let hasError = false;
    if (!newName.trim()) {
      setError(true);
      hasError = true;
    }
    if (!/^\d{4}$/.test(newPassword)) {
      setPwError(true);
      hasError = true;
    }
    if (hasError) return;

    onAddDreamer({
      name: newName.trim(),
      password: newPassword,
      image: newImage,
    });
    setNewName("");
    setNewPassword("");
    setNewImage(null);
    setError(false);
    setPwError(false);
    onClose();
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    if (error) setError(false);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (pwError) setPwError(false);
  };

  return (
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
      <DialogTitle
        sx={{
          color: "#fff",
          background: "#232323",
          pb: 2,
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
          letterSpacing: 1,
        }}
      >
        Crear nuevo soñador
      </DialogTitle>
      <DialogContent sx={{ background: "#232323" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 1,
            minWidth: 400,
          }}
        >
          <TextField
            size="small"
            label="Nuevo soñador"
            value={newName}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
            error={error}
            helperText={error ? "Por favor ingresa un nombre" : ""}
            sx={{
              background: "#232323",
              input: { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#fff" },
            }}
          />
          <TextField
            size="small"
            label="Contraseña (4 dígitos)"
            value={newPassword}
            onChange={handlePasswordChange}
            variant="outlined"
            type="password"
            inputProps={{ maxLength: 4, pattern: "\\d{4}" }}
            fullWidth
            error={pwError}
            helperText={pwError ? "Ingresa 4 dígitos numéricos" : ""}
            sx={{
              background: "#232323",
              input: { color: "#fff", letterSpacing: 4 },
              "& .MuiInputLabel-root": { color: "#fff" },
            }}
          />
          <Button
            variant="outlined"
            component="label"
            startIcon={<PhotoCamera />}
            sx={{
              color: "#fff",
              borderColor: "#444",
              background: "#232323",
              textTransform: "none",
              width: "100%",
              "&:hover": { background: "#222", borderColor: "#fff" },
            }}
          >
            {newImage ? "Foto seleccionada" : "Cargar foto"}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </Button>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          background: "#232323",
          display: "flex",
          justifyContent: "center",
          gap: 2,
          pb: 3,
          pt: 2,
        }}
      >
        <Button onClick={onClose} sx={{ color: "#fff", minWidth: 120 }}>
          Cancelar
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            background: "#444",
            color: "#fff",
            minWidth: 120,
            "&:hover": { background: "#222" },
          }}
          onClick={handleAdd}
        >
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
