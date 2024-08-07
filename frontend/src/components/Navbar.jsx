import { Typography } from '@mui/material';
import React from 'react';

// Navbar component to display the application title
const Navbar = () => {
  return (
    <>
      {/* Typography component to style the title */}
      <Typography
        variant="h3" // Sets the variant to h3 for styling
        display="flex" // Sets display to flex
        flexDirection="column" // Arranges children in a column direction
        alignItems="left" // Aligns items to the left
        padding="10px" // Adds padding of 10px
        pl={'40px'} // Adds padding-left of 40px
        justifyContent="center" // Centers content along the main axis
        bgcolor="#7FA1C3" // Sets the background color
        component="h1" // Uses h1 HTML element for the typography
        color="white" // Sets the text color to white
      >
        PaySpaze
      </Typography>
    </>
  );
}

export default Navbar;
