import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate payment validation
    if (cardNumber.length === 16) {
      alert("Payment successful!");
      navigate("/"); // Redirect to home page
    } else {
      setError("Please enter a valid 16-digit card number.");
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <select>Select Card type
                <option value ="Visa">Visa</option>
                <option value ="Master">MasterCard</option> 
                <option value ="Giftcard">GiftCard</option>
            </select>
<br/><br/><br/><br/>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter your card number"
            maxLength="16"
          />
        </div>
        <button type="submit" className="submit-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;