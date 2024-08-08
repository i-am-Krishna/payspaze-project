# payspaze-project

# Payment Application
A React-based payment application with routing, a payment form, and toast notifications for user feedback.


# Live Link 

[Click here to visit the website](https://66b47319be40e5b1e5015843--dulcet-halva-af8698.netlify.app/)


# Features
Routing: Navigate between the home page and login page using React Router.
Payment Form: Input payment details and submit them.
Toast Notifications: Display success or error messages using react-toastify.
Responsive Design: Styled using Material-UI and responsive to different screen sizes.
Getting Started
To get started with the application, follow these steps:

# Prerequisites
Node.js (version 14 or higher)
npm or yarn
Installation

# Clone the repository:

1. git clone https://github.com/yourusername/your-repository.git


# Navigate to the project directory:

2. cd your-repository

# Install the dependencies:

npm install
# or
yarn install


# Running the Application
To start the application in development mode:

npm start
# or
yarn start

This will start the development server and open the application in your default web browser.



# Building the Application
To create a production build of the application:

npm run build
# or
yarn build

The production build will be output to the build directory.


# Project Structure
 1. src/: Source code for the application.
 2. components/: Contains reusable React components.
 3. pages/: Contains page components (e.g., Home, Login).
 4. routes/: Contains routing configuration.
 5. api/: Contains API mock functions.
 6. App.js: Main application component.
 7. index.js: Entry point of the application.
 8. public/: Static assets and HTML file.
 9. package.json: Project dependencies and scripts.


# Dependencies
 1. React: JavaScript library for building user interfaces.
 2. React Router: Declarative routing for React.js.
 3. Material-UI: React components for faster and easier web development.
 4. react-toastify: Toast notifications for React.



# Acknowledgements
1. React
2. React Router
3. Material-UI
4. react-toastify


# Implemented if I have more time

With more time, I would enhance the PaymentButton component by adding comprehensive form validation, a loading indicator, and improved error handling for various scenarios. Integration with a real payment gateway and styling enhancements would be prioritized. Auto-focus on input fields and accessibility improvements would further refine user experience. Localization support and a user feedback mechanism would be implemented for broader reach and insight.
I created Login page and add functionality for user signup and signin 



# Testing Different Scenarios

PaymentApi.js defines a mock API response system for testing purposes. The mockApiResponse function simulates various API responses based on the provided status code. It returns a resolved promise for a successful response (200), and a rejected promise for client-side errors (400), unauthorized errors (401), or server-side errors (500). The default case handles unexpected status codes by simulating a server error.

The sendPayment function uses this mockApiResponse to simulate sending a payment request. It includes a helper function, getRandomElement, to select a random status code from a predefined array, ensuring diverse testing scenarios. This approach is beneficial for testing how the application handles different API responses without relying on a live server. It allows developers to verify error handling and response management in a controlled environment, improving the reliability and robustness of the application before deployment.


# Testing success and failure ratios 
I am adding success ratios for testing where 7 out of 10 times, the response is 200, and the other reactions are 400, 401, and 500.



# Assumptions

 Assumptions included standardized API responses, basic validation sufficiency, predefined field options, intuitive and browser compatibility. These steps aim to bolster the component’s robustness, usability, and overall effectiveness.