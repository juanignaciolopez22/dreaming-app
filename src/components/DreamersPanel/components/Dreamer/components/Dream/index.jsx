import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { fetchPollinationsImage } from "../../../../../../services/images.api";
import { useDreamersStore } from "../../../../../../store/dreamersStore"; 

const Dream = ({ onSave }) => {
  const [dream, setDream] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const { addNotification } = useDreamersStore(); 
  const handleSave = async () => {
    setLoading(true);
    try {
      const imageUrl = await fetchPollinationsImage(dream);
      onSave(dream, imageUrl);
      addNotification({
        text: "¡Qué bueno que hayas soñado, no olvides publicarlo en la DreamsGallery!",
      });
      setDream("");
    } catch {
      setErrorDialog(true);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#232323",
        color: "#fff",
        padding: 20,
        borderRadius: 12,
        minWidth: 260,
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
      }}
    >
      <TextField
        placeholder="¿Qué has soñado?"
        value={dream}
        onChange={(e) => setDream(e.target.value)}
        multiline
        minRows={2}
        fullWidth
        InputProps={{
          style: { color: "#fff" },
        }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        sx={{
          background: "#232323",
          color: "#fff",
          "& .MuiInputBase-input": { color: "#fff" },
          "& .MuiInputLabel-root": { color: "#fff" },
        }}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={loading}
          sx={{
            mt: 2,
            background: "#444",
            color: "#fff",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": { background: "#222" },
          }}
        >
          {loading ? "Generando..." : "Guardar sueño"}
        </Button>
      </div>
      <Dialog
        open={errorDialog}
        onClose={() => setErrorDialog(false)}
        PaperProps={{
          sx: {
            background: "#232323",
            color: "#fff",
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          Error generando la imagen del sueño!
        </DialogTitle>
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            onClick={() => setErrorDialog(false)}
            sx={{
              color: "#fff",
              background: "#e57373", // rojo suave
              minWidth: 120,
              "&:hover": { background: "#d32f2f" }, // rojo más fuerte al pasar el mouse
            }}
          >
            Cerrar
          </Button>
          <Button
            onClick={() => {
              setErrorDialog(false);
              handleSave();
            }}
            sx={{
              color: "#fff",
              background: "#616161",
              minWidth: 120,
              "&:hover": { background: "#424242" },
            }}
          >
            Reintentar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dream;
