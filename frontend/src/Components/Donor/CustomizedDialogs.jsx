import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    textAlign: "center", // Center text inside DialogContent
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    justifyContent: "center", // Center buttons in DialogActions
  },
  "& .MuiDialog-paper": {
    minWidth: "400px", // Ensures minimum width
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));


export default function CustomizedDialogs({open, handleClose,institute }) {

  return (
    <React.Fragment>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {institute.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
           Category : {institute.category}
          </Typography>
          <Typography gutterBottom>
            Quantity : {institute.quantity}
          </Typography>
          <Typography gutterBottom>
            Total Price : {institute.price}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Proceed to Donate
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}