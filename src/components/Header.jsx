import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="navbar__title">Fibracoop Manager</h1>
        <ul className="navbar__menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/clientes">Clientes</a></li>
          <li><a href="/configuracion">Configuración</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;