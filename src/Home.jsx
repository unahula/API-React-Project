import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]); // State to store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [hasSearched, setHasSearched] = useState(false); 
  const nav = useNavigate();
  // Fetch all products from the Fake Store API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        //setProducts({...response.data, quantity: 7}); // Store all products
        setProducts(response.data);
        //setFilteredProducts(response.data); // Initialize filtered products
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Handle search
  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    
    );
    
    setFilteredProducts(filtered);
    setHasSearched(true)
  };
 const signin = (id) => {
  nav('/SignIn');
 }
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Home     </h1>
      <div>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
       {(filteredProducts.length === 0)&&(hasSearched) ?<h1> We don't have this item here</h1> : hasSearched ?
        (<><h1>The item you are looking is in our store ....</h1>
            {filteredProducts.map((product) => (

          <ul><li key={product.id}  >
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={()=>signin(product.id)}>Go to checking </button>
            {/* <button onClick={()=>signin} style={{backgroundcolor:"green"}}>{product.quantity ===0 ? "Out of Stock" :"Sign In to Buy"}</button> */}
          </li></ul>
        ))}</>):<h1>Search a product here ... </h1>}
      
    </div>
  );
};

export default Home;