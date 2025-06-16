import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function DreamerSearch({ filter, setFilter }) {
  return (
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
  );
}