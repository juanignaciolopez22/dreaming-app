import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { fetchPollinationsImage } from "../../../../../../services/images.api";
import { useDreamersStore } from "../../../../../../store/dreamersStore";
import DreamErrorDialog from "./components/DreamErrorDialog";

const Dream = ({ onSave, dreamerName }) => {
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
        text: `¡Qué bueno que hayas soñado sobre "${dream}", ${dreamerName}! Ahora no olvides publicarlo en la DreamsGallery.`,
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
      <DreamErrorDialog
        open={errorDialog}
        onClose={() => setErrorDialog(false)}
        onRetry={() => {
          setErrorDialog(false);
          handleSave();
        }}
      />
    </div>
  );
};

export default Dream;
