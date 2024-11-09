import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/1.png" alt="Katanstore Logo" className="logo" />
      </div>
      <nav className="nav">
        <NavLink to="/" exact activeClassName="active">Inicio</NavLink>
        <NavLink to="/colecciones" activeClassName="active">Coleccione</NavLink>
        <NavLink to="/nosotros" activeClassName="active">Nosotros</NavLink>
      </nav>
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Buscar tu ropa" />
        </div>
        
        <Link to="/login">
          <img src="/user.png" alt="Perfil" className="icon" />
        </Link>
        
        {/* Agrega Link alrededor del ícono de carrito */}
        <Link to="/cart"> 
          <img src="/cart.png" alt="Carrito" className="icon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
