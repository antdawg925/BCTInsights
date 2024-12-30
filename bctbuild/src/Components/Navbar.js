import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate("/")}>
        BCT Insights
      </div>
      <div className="navbar-links">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/services")}>Services</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
