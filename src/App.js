

import React from "react";
import "./App.css"; // Add some basic styling
import Home from "./pages/Home";
import SignIn from "./pages/SignIn.jsx";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./pages/ProtectedRoute";
import Post from "./pages/Post";
import { ThemeProvider } from "./ThemeContext";
import GroceryList from "./pages/GroceryList";
import ProductDetails from "./pages/ProductDetails"; // Import the missing component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";

function App() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <ThemeProvider>
    <Router>
      <div className="App">
        <h1>Future Gen Store </h1>
        {/* Tab Navigation */}
        <div className="tabs">
          <Link to="/" className="tab">
            Home
          </Link>
          <Link to="/post" className="tab">
            Post
          </Link>
          <Link to="/about" className="tab">
            About
          </Link>
          <Link to="/payment" className="tab">
            Payment
          </Link>
          
          <Link to="/grocery" className="tab">
            Store Items
          </Link>
          <Link to="/signin" className="tab">
            Sign in
          </Link>
        </div>

        {/* Tab Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home title="Store E." />} />
            <Route path="/post" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/grocery" element={<GroceryList />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;