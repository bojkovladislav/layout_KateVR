import { FC, ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1.5),
  },
  "& .MuiPaper-root": {
    backgroundColor: "black",
  },
}));

interface Props {
  isModalOpen: boolean;
  handleModalClose: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({
  isModalOpen,
  handleModalClose,
  children,
}) => {
  return (
    <BootstrapDialog onClose={handleModalClose} open={isModalOpen}>
      <IconButton
        aria-label="close"
        onClick={handleModalClose}
        sx={{
          position: "absolute",
          right: 0,
          color: "white",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>{children}</DialogContent>
    </BootstrapDialog>
  );
};
