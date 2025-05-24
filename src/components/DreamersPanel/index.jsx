import { useState } from "react";
import Dreamer from "../Dreamer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function DreamersPanel() {
  const [dreamers, setDreamers] = useState([{ name: "Juani" }]);
  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (newName.trim()) {
      setDreamers([...dreamers, { name: newName.trim() }]);
      setNewName("");
    }
  };

  return (
    <>
      <div style={{ display: "flex", gap: 8, margin: 24 }}>
        <TextField
          size="small"
          label="Nuevo soñador"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          style={{ textTransform: "none", background: "#444", color: "#fff" }}
          onClick={handleAdd}
        >
          Agregar
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, margin: 24 }}>
        {dreamers.map((d, i) => (
          <Dreamer key={i} name={d.name} />
        ))}
      </div>
    </>
  );
}

export default DreamersPanel;
