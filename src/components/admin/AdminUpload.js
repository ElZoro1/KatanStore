
import React, { useState } from 'react';
import './AdminUpload.css';

const AdminUpload = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [tallas, setTallas] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Producto subido:', { nombre, precio, tallas, categoria, imagen });
  };

  return (
    <div className="admin-upload-container">
      <h2>Subir Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="formulario-producto">
        <label>Nombre del producto</label>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Precio</label>
        <input
          type="number"
          placeholder="Precio del producto"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />

        <label>Tallas (separadas por comas)</label>
        <input
          type="text"
          placeholder="Ejemplos: S, M, L, XL"
          value={tallas}
          onChange={(e) => setTallas(e.target.value)}
          required
        />

        <label>Categoría</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
          <option value="">Seleccione una categoría</option>
          <option value="Home">Home</option>
          <option value="Colecciones">Colecciones</option>
        </select>

        <label>Imagen del producto</label>
        <input type="file" onChange={handleImageChange} required />

        <button type="submit" className="subir-button">Subir producto</button>
      </form>
    </div>
  );
};

export default AdminUpload;
