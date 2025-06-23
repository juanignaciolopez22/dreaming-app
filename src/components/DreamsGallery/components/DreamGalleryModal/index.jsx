import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useParams, useNavigate } from "react-router-dom";
import { useDreamersStore } from "../../../../store/dreamersStore";

export default function DreamGalleryModal() {
  const { dreamId } = useParams();
  const navigate = useNavigate();

  const { dreamers } = useDreamersStore();
  const allDreams = dreamers.flatMap((d) =>
    (d.dreams || [])
      .filter((dr) => dr.publicado)
      .map((dr) => ({
        ...dr,
        owner: d.name,
        ownerImage: d.image,
      }))
  );
  const dream = allDreams.find((d) => String(d.id) === String(dreamId));

  return (
    <Dialog
      open={true}
      onClose={() => navigate(-1)}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: "#232323",
          borderRadius: 6,
          boxShadow: 8,
          width: "100%",
          maxWidth: { xs: "95vw", sm: "90vw", md: "600px" },
          m: 1,
        },
      }}
    >
      <DialogContent
        sx={{
          background: "#232323",
          position: "relative",
          p: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "60vh", sm: "70vh", md: "80vh" },
        }}
      >
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#fff",
            zIndex: 2,
            background: "rgba(30,30,30,0.7)",
            borderRadius: "50%",
            "&:hover": { background: "#444" },
          }}
        >
          <CloseIcon />
        </IconButton>
        {dream ? (
          <>
            <img
              src={dream.imageUrl}
              alt={dream.text}
              style={{
                width: "100%",
                maxWidth: 480,
                maxHeight: "50vh",
                objectFit: "contain",
                marginTop: 24,
                marginBottom: 24,
                borderRadius: 12,
              }}
            />
            <div style={{ color: "#fff", fontSize: 20, marginBottom: 8 }}>
              "{dream.text}"
            </div>
            <div style={{ color: "#90caf9", fontSize: 16 }}>
              Soñador: {dream.owner}
            </div>
          </>
        ) : (
          <div style={{ color: "#fff", textAlign: "center", padding: 40 }}>
            Sueño no encontrado.
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
