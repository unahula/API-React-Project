import React from "react";
import { useLocation, Link, Routes, Route } from "react-router-dom";
import './App.css'
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
  const location = useLocation(); // Get the current route
  const hideNavRoutes = ["/signin", "/payment"];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditionally render the Header */}
      {shouldShowNav && <Header />}

      {/* Conditionally render the navigation bar */}
      {shouldShowNav && (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/post">Post</Link>
          <Link to="/grocery">Our Product</Link>
        </nav>
      )}

      {/* Render the routes */}
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
          {/* Protected routes go here */}
        </Route>
      </Routes>
    </>
  );
};

export default AppContent; // Ensure AppContent is exported as default

