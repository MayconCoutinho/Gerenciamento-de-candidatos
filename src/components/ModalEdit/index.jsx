import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { EditCandidate } from "../EditCandidate";
import { Stack } from "@mui/material";
import { forwardRef, useContext, useState } from "react";
import { FunctionsContext } from "../../context/Functions";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalEdit = () => {
  const { modalEditOpen, fuctionModalEditOpen } = useContext(FunctionsContext);

  const handleClose = () => {
    fuctionModalEditOpen();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={modalEditOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#222" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Editar Dados
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Stack justifyContent="center" alignItems="center" marginTop={20}>
          <EditCandidate />
        </Stack>
      </Dialog>
    </div>
  );
};
