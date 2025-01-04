import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">Fibracoop Manager</div>
      <nav>
        <ul className="navbar__menu">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Clientes</a></li>
          <li><a href="#">Configuración</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;