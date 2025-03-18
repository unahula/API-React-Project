import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { getProductsbyId } from '../services/Api';
const ProductDetails = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [availableQuantity, setAvailableQuantity] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  //const isLogged = false;

  useEffect(() => {
    getProductsbyId(id)
      .then((data) => {
        setProduct(data); // Set the product state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        //setError(error);
        setLoading(false);
      });
  }, [id]);

  if(loading)  return (<div>Loading ... </div>)
    const handleCheckAvailability = () => {
      const fakeAvailableQuantity = Math.floor(Math.random() * 10) + 1; // Random quantity between 1 and 10
      setAvailableQuantity(fakeAvailableQuantity);
      setQuantity(fakeAvailableQuantity);
    };
  
    const handleButtonClick = () => {
      toggleTheme(); // Call the first function
      handleCheckAvailability(); // Call the second function
    };
    

  if (!product) return <div>Loading...</div>;
  const buyItem = () => {
   navigate('/payment');
  }
  // const goback = (id)=> {
  //   navigate('/home');
  // }
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      
      <button onClick={()=>buyItem(product.id)} style={{backgroundcolor:"green"}}>{product.quantity ===0? "Out of Stock" :"Go to Pay"}</button>
      
      <button onClick={handleButtonClick} 
       style ={{  backgroundColor: theme === "light" ? "#234" : "#456", // Correct CSS property
          color: theme === "light" ? "#fff" : "#000", 
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"}} >check Availability </button>
          <br/>
          {availableQuantity !== null && (
        <p>
          Available Quantity: {availableQuantity > 0 ? quantity : "Out of Stock"}
        </p>
      )}
          <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;