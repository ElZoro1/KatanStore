
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 
import { auth } from '../../firebaseConfig';
import './Header.css';

function Header() {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="logo-section">
        <img src="/1.png" alt="Katanstore Logo" className="logo" />
      </div>
      <nav className="nav">
        <NavLink to="/" exact activeClassName="active">Inicio</NavLink>
        <NavLink to="/colecciones" activeClassName="active">Colecciones</NavLink>
        <NavLink to="/nosotros" activeClassName="active">Nosotros</NavLink>

        {user && user.role === 'admin' && (
          <>
            <NavLink to="/admin/upload" activeClassName="active">Subir</NavLink>
            <NavLink to="/admin/delete" activeClassName="active">Eliminar</NavLink>
            <NavLink to="/admin/orders" activeClassName="active">Pedidos en Curso</NavLink>
          </>
        )}
      </nav>
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Busca tu ropa" />
        </div>
        
        {user ? (
          <button onClick={() => auth.signOut()} className="logout-icon">
            <img src="/cerrar.png" alt="Cerrar sesión" />
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
