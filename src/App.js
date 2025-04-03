import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import { CartProvider } from "./pages/CartContext";
import AppContent from "./AppContent"; // Ensure AppContent is imported correctly
//import { AuthProvider } from '../context/AuthContext'; // adjust path
const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
      
        <Router>
        
          <AppContent /> 
          
        </Router>
       
      </CartProvider>
      
    </ThemeProvider>
  );
};

export default App;