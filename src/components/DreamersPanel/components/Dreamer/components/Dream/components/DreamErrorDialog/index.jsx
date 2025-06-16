import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function DreamErrorDialog({ open, onClose, onRetry }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
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
          onClick={onClose}
          sx={{
            color: "#fff",
            background: "#e57373",
            minWidth: 120,
            "&:hover": { background: "#d32f2f" },
          }}
        >
          Cerrar
        </Button>
        <Button
          onClick={onRetry}
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
  );
}