import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (email && password) {
      if (onSubmit) {
        onSubmit({ email, password });
      }
      localStorage.setItem("isAuthenticated", "true");
      navigate("/signin/grocery");
    } else {
      alert("Please enter email and password");
    }
  };
  const handleLogout = () => {
     
      localStorage.removeItem("isAuthenticated");
      navigate('/')
    }
  
  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <br />
      <button
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default SignIn;