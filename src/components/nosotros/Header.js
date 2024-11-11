// src/components/nosotros/Header.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../AuthContext';
import { auth } from '../../firebaseConfig'; // Importa auth desde firebaseConfig

function Header() {
  const { user } = useAuth(); // Obtén el usuario del contexto
  
  const handleLogout = () => {
    auth.signOut(); // Función para cerrar sesión
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img src="/1.png" alt="Katanstore Logo" className="logo" />
      </div>
      <nav className="nav">
        <NavLink to="/" exact activeClassName="active">Inicio</NavLink>
        <NavLink to="/colecciones" activeClassName="active">Colecciones</NavLink>
        <NavLink to="/nosotros" activeClassName="active">Nosotros</NavLink>
      </nav>
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Buscar tu ropa" />
        </div>

        {user ? (
          <button onClick={handleLogout} className="logout-button">
            <img src="apagar.png" alt="Cerrar sesión" className="icon" />
          </button>
        ) : (
          <Link to="/login">
            <img src="/user.png" alt="Perfil" className="icon" />
          </Link>
        )}

        <Link to="/cart">
          <img src="/cart.png" alt="Carrito" className="icon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
