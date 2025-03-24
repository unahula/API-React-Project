import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import { CartProvider } from "./pages/CartContext";
import AppContent from "./AppContent"; // Ensure AppContent is imported correctly

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <AppContent /> {/* Use AppContent */}
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;