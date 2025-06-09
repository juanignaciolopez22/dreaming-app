import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Dreamer from "./components/Dreamer";
import { useDreamersStore } from "../../store/dreamersStore";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
function DreamersPanel() {
  const { dreamers, addDreamer } = useDreamersStore();
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [error, setError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [open, setOpen] = useState(false); // Nuevo estado para el Dialog
  const [filter, setFilter] = useState("");
  const filteredDreamers = dreamers.filter((d) =>
    d.name.toLowerCase().includes(filter.toLowerCase())
  );
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

    addDreamer({
      name: newName.trim(),
      password: newPassword,
      image: newImage,
    });
    setNewName("");
    setNewPassword("");
    setNewImage(null);
    setError(false);
    setPwError(false);
    setOpen(false); // Cierra el Dialog al agregar
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
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          mb: 2,
        }}
      >
        {dreamers.length > 1 && (
          <TextField
            label="Buscar soñador"
            variant="outlined"
            size="medium"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
              style: { background: "transparent", color: "#fff" },
            }}
            sx={{
              mb: 2,
              width: 320,
              input: { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                background: "transparent",
                "& fieldset": { borderColor: "#444" },
                "&:hover fieldset": { borderColor: "#fff" },
              },
            }}
          />
        )}
        <Button
          variant="contained"
          sx={{
            background: "#444",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            width: 220,
            height: 48,
            fontSize: 18,
            borderRadius: 2,
            "&:hover": { background: "#222" },
          }}
          onClick={() => setOpen(true)}
        >
          Nuevo soñador
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
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
            pb: 2, // padding bottom para separar del contenido
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
          <Button
            onClick={() => setOpen(false)}
            sx={{ color: "#fff", minWidth: 120 }}
          >
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, margin: 24 }}>
        {filteredDreamers.map((d, i) => (
          <Dreamer
            key={i}
            name={d.name}
            image={d.image}
            password={d.password}
          />
        ))}
      </div>
    </>
  );
}

export default DreamersPanel;
