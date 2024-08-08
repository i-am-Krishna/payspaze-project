import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@mui/material';

// SuccessDialog component displays a success message after a payment is completed
const SuccessDialog = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogContent>
      {/* Message to indicate successful payment */}
      <DialogContentText
        sx={{
          padding: '20px 100px',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}
      >
        Payment Successful
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      {/* Close button to close the success dialog */}
      <Button onClick={onClose} autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default SuccessDialog;
