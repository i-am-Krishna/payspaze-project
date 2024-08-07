import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Mainroute from "./routes/Mainroutes";
import Navbar from "./components/Navbar";

// Main App component that serves as the entry point of the application
function App() {
  return (
    <>
      {/* Navbar component displayed at the top of the application */}
      <Navbar />

      {/* Mainroute component handles routing between different pages */}
      <Mainroute />

      {/* ToastContainer component for displaying toast notifications */}
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
