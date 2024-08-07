import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Login component for the application
function Login() {
  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Function to navigate to the payment page
  const goToPaymentPage = () => {
    navigate('/'); // Navigates to the home page (payment page)
  };

  return (
    // Container component to center the content and set a max width
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20vh', backgroundColor: '#fff' }}>
      {/* Box component for layout styling */}
      <Box 
        style={{ 
          padding: '50px', // Adds padding inside the box
          border: '1px solid #ccc', // Adds a border around the box
          borderRadius: '8px', // Rounds the corners of the box
          boxShadow: '0 1px 10px rgba(0, 0, 0, 0.1)' // Adds a shadow effect to the box
          ,
          backgroundColor:'#ebf5f7'
        }}
      >
        {/* Typography component to display the title */}
        <Typography variant="h4" component="h1" gutterBottom>
          Login Page
        </Typography>
        {/* Button component to navigate to the payment page */}
        <Button 
          variant="contained" // Uses the contained variant for the button
          color="primary" // Sets the button color to primary
          onClick={goToPaymentPage} // Calls the goToPaymentPage function on click
          style={{ marginTop: '20px' }} // Adds a top margin to the button
        >
          Go to the payment page
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
