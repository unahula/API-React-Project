import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Correct import
import ProductDetails from "./ProductDetails"; 

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]); // State to store grocery items
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate();

  // Fetch data from the Fake Store API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // Fake Store API endpoint
      .then((response) => {
        setGroceryItems(response.data); // Set the fetched data to state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error); // Handle errors
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array ensures this runs only once

  // Display loading or error messages
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Function to handle product click
  const showdetail = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page
  };

  return (
    <div>
      <h1>Store Items</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {groceryItems.map((item) => (
          <li
            onClick={() => showdetail(item.id)} // Pass a function reference
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={item.image} alt={item.title} width="100" />
            <div style={{ marginLeft: "20px" }}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;