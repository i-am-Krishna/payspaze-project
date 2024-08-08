import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Button, Typography } from '@mui/material';

// PaymentDialog component renders the form for making a payment
const PaymentDialog = ({ open, onClose, formValues, errors, onChange, onSubmit, isFormValid, message }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Make a Payment</DialogTitle>
    <DialogContent>
      {/* Input field for the recipient's email */}
      <TextField
        margin="dense"
        label="To"
        type="email"
        fullWidth
        name="to"
        value={formValues.to}
        onChange={onChange}
        error={!!errors.to}
        helperText={errors.to}
      />
      {/* Dropdown for selecting the currency */}
      <TextField
        margin="dense"
        label="From"
        select
        fullWidth
        name="from"
        value={formValues.from}
        onChange={onChange}
      >
        <MenuItem value="BTC">BTC</MenuItem>
        <MenuItem value="ETH">ETH</MenuItem>
      </TextField>
      {/* Input field for the payment amount */}
      <TextField
        margin="dense"
        label="Amount"
        type="number"
        fullWidth
        name="amount"
        value={formValues.amount}
        onChange={onChange}
        error={!!errors.amount}
        helperText={errors.amount}
      />
      {/* Input field for a description of the payment */}
      <TextField
        margin="dense"
        label="Description"
        type="text"
        fullWidth
        name="description"
        value={formValues.description}
        onChange={onChange}
      />
      {/* Display any error message returned by the API */}
      {message && (
        <Typography color="error" variant="body2" style={{ marginTop: '10px' }}>
          {message}
        </Typography>
      )}
    </DialogContent>
    <DialogActions>
      {/* Cancel button to close the dialog without submitting */}
      <Button onClick={onClose} color="secondary">
        Cancel
      </Button>
      {/* Submit button to send the payment, disabled if the form is not valid */}
      <Button onClick={onSubmit} color="primary" disabled={!isFormValid()}>
        Submit
      </Button>
    </DialogActions>
  </Dialog>
);

export default PaymentDialog;
