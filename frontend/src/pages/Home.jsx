import React from 'react';
import PaymentButton from '../components/PaymentButton';
import { Container, Typography, Box } from '@mui/material';

// Home component to display the main content of the application
const Home = () => {
    return (
        <>
            {/* Box component for layout styling */}
            <Box
                display="flex" // Sets display to flex
                flexDirection="column" // Arranges children in a column direction
                alignItems="center" // Centers items horizontally
                justifyContent="center" // Centers items vertically
                height="90vh" // Sets height to 90% of the viewport height
                bgcolor="#EBF4F6" // Sets background color
            >
                {/* Container component for content styling */}
                <Container
                    maxWidth="sm" // Sets maximum width of the container to small
                    sx={{
                        bgcolor: 'background.paper', // Sets background color to paper (default Material-UI color)
                        p: 10, // Adds padding
                        border: '1px solid #ccc', // Adds a border
                        borderRadius: 2, // Sets border radius
                        textAlign: 'center' // Centers text
                    }}
                >
                    {/* Typography component to display the title */}
                    <Typography variant="h6" component="h2" gutterBottom>
                        Payment Application
                    </Typography>
                    {/* Box component to contain the PaymentButton */}
                    <Box display="flex" justifyContent="center" mt={2}>
                        <PaymentButton />
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Home;
