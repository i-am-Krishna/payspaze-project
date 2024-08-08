import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Typography, DialogContentText } from '@mui/material';
import { sendPayment } from '../api/paymentApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// PaymentButton component handles payment form and submission
const PaymentButton = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // State to handle the opening and closing of the payment dialog
  const [formValues, setFormValues] = useState({
    to: '',
    from: '',
    amount: '',
    description: ''
  }); // State to store form values
  const [errors, setErrors] = useState({}); // State to store validation errors
  const [message, setMessage] = useState(''); // State to store response message
  const [openSuccess, setOpenSuccess] = useState(false); // State to handle the success dialog

  // Function to open the payment dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the payment dialog and reset the form
  const handleClose = () => {
    setOpen(false);
    setMessage('');
    setErrors({});
    setFormValues({
      to: '',
      from: '',
      amount: '',
      description: ''
    });
  };

  // Function to handle form input changes and validate fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
  };

  // Function to validate specific fields in the form
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'to':
        error = (value.includes('@') && value.includes('.')) ? '' : 'Enter a valid email address';
        break;
      case 'amount':
        error = value > 0 ? '' : 'Amount must be positive';
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  // Function to check if the form is valid
  const isFormValid = () => {
    return formValues.to && formValues.from && formValues.amount > 0 && !errors.to && !errors.amount;
  };

  // Function to handle form submission and send payment
  const handleSubmit = async () => {
    try {
      const response = await sendPayment(formValues);
      setMessage(response.data.message);
      setFormValues({
        to: '',
        from: '',
        amount: '',
        description: ''
      });
      setOpenSuccess(true); // Open the success dialog on successful payment
      setOpen(false); // Close the payment dialog
      setMessage("");
    } catch (error) {
      const { status, data } = error.response;
      if (status === 400) {
        setMessage(data.message);
        toast.error(data.message);
      } else if (status === 401) {
        toast.error(data.message);
        navigate('/login');
      } else if (status >= 500) {
        toast.error(data.message);
        setMessage(data.message);
      }
    }
  };

  // Function to close the success dialog
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  return (
    <div>
      {/* Button to open the payment dialog */}
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Make Payment
      </Button>

      {/* Success dialog to show payment success message */}
      <Dialog
        open={openSuccess}
        onClose={handleCloseSuccess}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText   sx={{
              padding: '20px 100px',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}>
           Payment Successful
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccess} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Payment dialog for inputting payment details */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Make a Payment</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="To"
            type="email"
            fullWidth
            name="to"
            value={formValues.to}
            onChange={handleChange}
            error={!!errors.to}
            helperText={errors.to}
          />
          <TextField
            margin="dense"
            label="From"
            select
            fullWidth
            name="from"
            value={formValues.from}
            onChange={handleChange}
          >
            <MenuItem value="BTC">BTC</MenuItem>
            <MenuItem value="ETH">ETH</MenuItem>
          </TextField>
          <TextField
            margin="dense"
            label="Amount"
            type="number"
            fullWidth
            name="amount"
            value={formValues.amount}
            onChange={handleChange}
            error={!!errors.amount}
            helperText={errors.amount}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
          {message && (
            <Typography color="error" variant="body2" style={{ marginTop: '10px' }}>
              {message}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" disabled={!isFormValid()} >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaymentButton;
