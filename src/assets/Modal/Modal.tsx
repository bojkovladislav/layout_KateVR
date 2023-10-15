import { FC, ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  isModalOpen: boolean;
  handleModalClose: () => void;
  children: ReactNode;
  background?: string;
  styles?: { [key: string]: string | number };
}

export const Modal: FC<Props> = ({
  isModalOpen,
  handleModalClose,
  children,
  styles,
}) => {
  const BootstrapDialog = styled(Dialog)(() => ({
    "& .MuiDialogContent-root": {
      padding: 0,
      margin: 0,
    },
    "& .MuiPaper-root": {
      backgroundColor: "black",
      overflow: "hidden",
      maxWidth: 1000,
      maxHeight: 510,
      ...styles,
    },
  }));

  return (
    <BootstrapDialog onClose={handleModalClose} open={isModalOpen} fullWidth>
      <IconButton
        size="large"
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
