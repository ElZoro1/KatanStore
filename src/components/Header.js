import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">CATANSTORE</div>
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Colecciones</a></li>
        <li><a href="#">Nosotros</a></li>
      </ul>
    </nav>
    <div className="search-cart">
      <input type="text" placeholder="Buscar tu ropa" />
      <button className="cart-button">🛒</button>
    </div>
  </header>
);

export default Header;
