import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useEffect, useState } from "react";

// Hook para animar texto tipo máquina de escribir
export function useTypewriter(fullText, delay = 120) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let forward = true;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i));
      if (forward) {
        i++;
        if (i > fullText.length) forward = false;
      } else {
        i--;
        if (i < 0) forward = true;
      }
    }, delay);
    return () => clearInterval(interval);
  }, [fullText, delay]);

  return displayed;
}

// Array de trofeos para el podio
export const TROPHIES = [
  {
    icon: <EmojiEventsIcon sx={{ color: "#ffd700", fontSize: 40 }} />,
    label: "Oro",
  },
  {
    icon: <EmojiEventsIcon sx={{ color: "#c0c0c0", fontSize: 36 }} />,
    label: "Plata",
  },
  {
    icon: <EmojiEventsIcon sx={{ color: "#cd7f32", fontSize: 32 }} />,
    label: "Bronce",
  },
];

// Función para calcular el ranking de dreamers
export function getDreamersRanking(dreamers, top = 3) {
  return dreamers
    .map((d) => ({
      name: d.name,
      image: d.image,
      likes: (d.dreams || [])
        .filter((s) => s.publicado)
        .reduce((acc, s) => acc + (s.likes || 0), 0),
    }))
    .filter((d) => d.likes > 0)
    .sort((a, b) => b.likes - a.likes)
    .slice(0, top);
}
