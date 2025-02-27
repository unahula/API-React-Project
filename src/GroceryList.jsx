import React, { useState, useEffect } from "react";
import axios from "axios";

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]); // State to store grocery items
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

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

  return (
    <div>
      <h1>Grocery Items</h1>
      <ul>
        {groceryItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} width="100" />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;