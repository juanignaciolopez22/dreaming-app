import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { fetchPollinationsImage } from "../../services/api";

const Dream = ({ onSave }) => {
  const [dream, setDream] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const imageUrl = await fetchPollinationsImage(dream);
      onSave(dream, imageUrl);
      setDream("");
    } catch {
      alert("Error generando la imagen del sueño");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#232323",
        color: "#fff",
        padding: 16,
        borderRadius: 8,
        minWidth: 220,
      }}
    >
      <TextField
        placeholder="¿Qué has soñado?"
        value={dream}
        onChange={(e) => setDream(e.target.value)}
        multiline
        minRows={2}
        fullWidth
        sx={{
          background: "#232323",
          color: "#fff",
        }}
      />
      <Button
        variant="contained"
        onClick={handleSave}
        disabled={loading}
        style={{
          marginTop: 8,
          background: "#444",
          color: "#fff",
          textTransform: "none",
        }}
      >
        {loading ? "Generando..." : "Guardar sueño"}
      </Button>
    </div>
  );
};

export default Dream;
