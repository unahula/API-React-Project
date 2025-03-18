import React, { useContext } from "react";
import { CartContext } from "./pages/CartContext";


const Checkout = () => {
    const { cart } = useContext(CartContext);
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div>
        <h1>Checkout</h1>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button>Place Order</button>
      </div>
    );
  };
  
  export default Checkout;