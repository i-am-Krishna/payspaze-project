import React, { useState } from 'react';
import { Button } from '@mui/material';
import { sendPayment } from '../api/paymentApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import PaymentDialog from './PaymentDialog';
import SuccessDialog from './SuccessDialog';

// PaymentButton component handles the payment process, including form management and API interaction
const PaymentButton = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [open, setOpen] = useState(false); // State to manage the visibility of the payment dialog
  const [openSuccess, setOpenSuccess] = useState(false); // State to manage the visibility of the success dialog
  const [formValues, setFormValues] = useState({
    to: '',
    from: '',
    amount: '',
    description: ''
  }); // State to store form input values
  const [errors, setErrors] = useState({}); // State to store form validation errors
  const [message, setMessage] = useState(''); // State to store response messages

  // Opens the payment dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Closes the payment dialog and resets the form
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  // Closes the success dialog
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  // Handles form field changes and validation
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
  };

  // Validates individual form fields
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

  // Checks if the form is valid for submission
  const isFormValid = () => {
    return formValues.to && formValues.from && formValues.amount > 0 && !errors.to && !errors.amount;
  };

  // Resets the form fields and errors
  const resetForm = () => {
    setFormValues({
      to: '',
      from: '',
      amount: '',
      description: ''
    });
    setErrors({});
    setMessage('');
  };

  // Handles the form submission and manages the API call
  const handleSubmit = async () => {
    try {
      const response = await sendPayment(formValues);
      setMessage(response.data.message);
      resetForm();
      setOpenSuccess(true); // Show success dialog on successful payment
      setOpen(false); // Close payment dialog
    } catch (error) {
      const { status, data } = error.response;
      if (status === 400) {
        setMessage(data.message);
        toast.error(data.message); // Show error toast for 400 response
      } else if (status === 401) {
        toast.error(data.message); // Show error toast for 401 response
        navigate('/login'); // Redirect to login for 401 response
      } else if (status >= 500) {
        toast.error(data.message); // Show error toast for 500 response
        setMessage(data.message);
      }
    }
  };

  return (
    <div>
      {/* Button to open the payment dialog */}
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Make Payment
      </Button>
      {/* Payment dialog for inputting payment details */}
      <PaymentDialog
        open={open}
        onClose={handleClose}
        formValues={formValues}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
        message={message}
      />
      {/* Success dialog to show payment success message */}
      <SuccessDialog open={openSuccess} onClose={handleCloseSuccess} />
    </div>
  );
};

export default PaymentButton;
