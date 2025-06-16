import { useState } from "react";
import Dreamer from "./components/Dreamer";
import { useDreamersStore } from "../../store/dreamersStore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DreamerSearch from "./components/DreamerSearch";
import CreateDreamerDialog from "./components/CreateDreamerDialog";
function DreamersPanel() {
  const { dreamers, addDreamer } = useDreamersStore();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const filteredDreamers = dreamers.filter((d) =>
    d.name.toLowerCase().includes(filter.toLowerCase())
  );

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
          <DreamerSearch filter={filter} setFilter={setFilter} />
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
      <CreateDreamerDialog
        open={open}
        onClose={() => setOpen(false)}
        onAddDreamer={addDreamer}
      />
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
