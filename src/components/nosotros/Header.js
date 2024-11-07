import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/1.png" alt="Katanstore Logo" className="logo" />
        <h1>KATANSTORE</h1>
      </div>
      <nav className="nav">
        <NavLink to="/" exact activeClassName="active">Inicio</NavLink>
        <NavLink to="/colecciones" activeClassName="active">Colecciones</NavLink>
        <NavLink to="/nosotros" activeClassName="active">Nosotros</NavLink>
      </nav>
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Buscar Tu Ropa" />
        </div>
        
        {/* Enlace al login con el icono user.png */}
        <Link to="/login">
          <img src="/user.png" alt="Perfil" className="icon" />
        </Link>
        
        <img src="/cart.png" alt="Carrito" className="icon" />
      </div>
    </header>
  );
}

export default Header;
