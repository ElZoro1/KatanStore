// AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel de administración</h1>
      
      <div className="admin-links">
        <Link to="/admin/inventory" className="admin-link">
          Gestión de inventario
        </Link>
        <Link to="/admin/orders" className="admin-link">
          Gestión de pedidos
        </Link>
      </div>
      
      <div className="admin-section">
        <p>Bienvenido al panel de administración. Selecciona una opción para continuar.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
