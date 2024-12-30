import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <h1 className="brand-name" onClick={() => navigate("/")}>
        BCT Insights
      </h1>
      <div className="nav-buttons">
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/services")}>Services</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </nav>
  );
}

export default Nav;
