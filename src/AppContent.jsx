
import React from "react";
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
import ProductList from "./Components/Products/ProductList.jsx"

const AppContent = () => {
  const location = useLocation();

  // ✅ Only hide nav and header on /signin/grocery
  const isPrivateView = location.pathname === "/signin/grocery";

  return (
    <>
      {!isPrivateView && <Header />}

      {!isPrivateView && (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/post">Post</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/product">Our Product</Link>
        </nav>
      )}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product" element={<ProductList/>} />
        {/* <Route path="/product/:id" element={<ProductList/>} /> */}
        {/* Private view: after clicking sign in */}
        <Route path="/signin/grocery" element={<GroceryList />} />

        {/* Fallback */}
        <Route path="*" element={<div>Page not available</div>} />
      </Routes>
    </>
  );
};

export default AppContent;