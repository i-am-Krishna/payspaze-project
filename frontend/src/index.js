import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import function to report web vitals
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

// Create a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application inside the root element
root.render(
  <BrowserRouter>
    {/* Wrap the App component with BrowserRouter for routing */}
    <App />
  </BrowserRouter>
);

// Report web vitals to measure performance and optimize the app
reportWebVitals();
