import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
const ProductDetails = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const isLogged = false;
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct({ ...data, quantity: 10 }); 
        console.log(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) return <div>Loading...</div>;
  const buyItem = (id) => {
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
      <p>Quantity:{product.quantity}</p>
      <button onClick={()=>buyItem(product.id)} style={{backgroundcolor:"green"}}>{product.quantity ===0? "Out of Stock" :"Go to Pay"}</button>
      
      <button onClick = {toggleTheme} style ={{  backgroundColor: theme === "light" ? "#234" : "#456", // Correct CSS property
          color: theme === "light" ? "#fff" : "#000", 
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"}} >Dark Mode</button>
    </div>
  );
};

export default ProductDetails;