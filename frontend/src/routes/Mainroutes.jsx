import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

// Mainroute component for defining application routes
const Mainroute = () => {
  return (
    // Routes component to handle routing
    <Routes>
        {/* Route for the home page */}
        <Route path='/' element={<Home />} />
        
        {/* Route for the login page */}
        <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default Mainroute;
