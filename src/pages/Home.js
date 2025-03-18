import React, { useState, useEffect } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/Api";
const Home = () => {
  const [products, setProducts] = useState([]); // State to store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [hasSearched, setHasSearched] = useState(false); // State to track if a search has been performed
  const [backgroundImage, setBackgroundImage] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   getProducts()
  //     .then((response) => {
  //       if(response&&response.data){
  //       console.log("API Response:", response); // Log the response
  //       setProducts(response.data);
  //       setLoading(false);
  //       if (response.data && response.data.length > 0) {
  //         setBackgroundImage(response.data[0].image);
  //       }
  //     }})
  //     .catch((error) => {
  //       console.error("API Error:", error); // Log the error
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);
  
  
  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("Products data:", data); 
        setProducts(data);
        setLoading(false);
        if (data.length > 0) {
          setBackgroundImage(data[0].image);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
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
    setHasSearched(true);
  };
  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * products.length);
        setBackgroundImage(products[randomIndex].image);
      }, 2000); // Change image every 1 second

      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }
  }, [products]);

  // Navigate to the SignIn page
  const goToSignIn = () => {
    navigate("/SignIn");
  };

  // Display loading state
  if (loading) return <div>Loading...</div>;

  // Display error state
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width:"800px",
        
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Home</h1>
      <div>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Allow search on pressing Enter
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display search results or messages */}
      {hasSearched ? (
        filteredProducts.length === 0 ? (
          <h1>We do not have this item here.</h1>
        ) : (
          <>
            <h1>The item you are looking for is in our store.</h1>
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.image} alt={product.title} width="100" />
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                  <button onClick={goToSignIn}>Go to Checkout</button>
                </li>
              ))}
            </ul>
          </>
        )
      ) : (
        <h1>Search for a product here...</h1>
      )}
    </div>
  );
};

export default Home;