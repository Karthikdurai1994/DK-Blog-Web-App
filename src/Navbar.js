import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The DK Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/createBlog">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
