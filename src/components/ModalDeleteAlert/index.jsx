import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ApiContext } from "../../context/Api";
import { useContext } from "react";
import { FunctionsContext } from "../../context/Functions";

export const ModalDeleteAlert = () => {
  const { FuctionDeleteCandidate } = useContext(ApiContext);
  const { fuctionModalDeleteOpen, modalDeleteOpen, idCandidate } =
    useContext(FunctionsContext);

  const handleClose = () => {
    fuctionModalDeleteOpen();
  };

  const deletarCLient = async () => {
    FuctionDeleteCandidate(idCandidate);
    fuctionModalDeleteOpen();
  };

  return (
    <div>
      <Dialog
        open={modalDeleteOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tem certeza que deja excluir o candidato?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Caso aceite não tera como recupera os dados perdidos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              deletarCLient();
            }}
            sx={{
              backgroundColor: "#7a0000",
              ":hover": { backgroundColor: "#df0000" },
            }}
          >
            Sim
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
