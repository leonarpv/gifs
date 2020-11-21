import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <NavLink to="/" className="navbar-brand">
        Home
      </NavLink>
    </div>
  </nav>
);

export default Header;
