import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Header = () => {
  return (
    <div>
      <h1>Our Store is an amazing ... </h1>
      <p>
        If you want a greater deal, please <Link to="/signin">Sign In</Link>.
      </p>
    </div>
  );
};

export default Header;
