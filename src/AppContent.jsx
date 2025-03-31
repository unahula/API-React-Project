import React, { useEffect, useState } from "react";
import { useLocation, Link, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Post from "./pages/Post";
import GroceryList from "./pages/GroceryList";
import ProductDetails from "./pages/ProductDetails";
import ProtectedRoute from "./pages/ProtectedRoute";

const AppContent = () => {
  const location = useLocation();
  const hideNavRoutes = ["/signin", "/payment"];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check localStorage for authentication status
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, [location]); // re-check on route change

  return (
    <>
      {shouldShowNav && <Header />}

      {shouldShowNav && (
        <nav>
          <Link to="/">Home</Link>

          {/* Show these only when NOT authenticated */}
          {!isAuthenticated && <Link to="/about">About</Link>}
          {!isAuthenticated && <Link to="/post">Post</Link>}
          {!isAuthenticated && <Link to="/grocery">Our Product</Link>}

          <Link to="/checkout">Checkout</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/post" element={<Post />} />
        <Route path="/grocery" element={<GroceryList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route element={<ProtectedRoute />}>
          {/* Add protected routes here */}
        </Route>
      </Routes>
    </>
  );
};

export default AppContent;