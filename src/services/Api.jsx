
import axios from "axios";
//const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_URL = `https://fakestoreapi.com`;


export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; 
  }
};

export const getProductsbyId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; 
  }
};

