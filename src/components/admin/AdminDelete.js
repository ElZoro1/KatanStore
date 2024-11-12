// src/components/admin/AdminDelete.js
import React, { useState } from 'react';
import './AdminDelete.css';

const AdminDelete = () => {

  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', categoria: 'Colecciones' },
    { id: 2, nombre: 'Producto 2', categoria: 'Home' },
    { id: 3, nombre: 'Producto 3', categoria: 'Colecciones' },
  ]);
  const [mensaje, setMensaje] = useState('');

  const handleDelete = (productoId) => {

    const nuevosProductos = productos.filter((producto) => producto.id !== productoId);
    setProductos(nuevosProductos);

    // Mostrar mensaje de confirmación
    setMensaje('Producto eliminado correctamente');
    setTimeout(() => setMensaje(''), 3000); 
  };

  return (
    <div className="admin-delete-container">
      <h2>Eliminar Producto</h2>

      {mensaje && <p className="mensaje-exito">{mensaje}</p>}

      <ul className="lista-productos">
        {productos.map((producto) => (
          <li key={producto.id} className="producto-item">
            <span className="producto-nombre">{producto.nombre}</span>
            <span className="producto-categoria">({producto.categoria})</span>
            <button
              className="boton-eliminar"
              onClick={() => handleDelete(producto.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {productos.length === 0 && <p>No hay productos disponibles para eliminar.</p>}
    </div>
  );
};

export default AdminDelete;
