import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import DreamersPanel from "./components/DreamersPanel";
const theme = createTheme({ palette: { mode: "light" } });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DreamersPanel />
    </ThemeProvider>
  );
}

export default App;
