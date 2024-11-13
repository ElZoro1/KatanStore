
import React, { useState } from 'react';
import './AdminDelete.css';

const AdminDelete = () => {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [size, setSize] = useState("");

  const categories = ["Colecciones", "Hogar"];
  const products = [
    { id: 1, name: "Producto 1", category: "Colecciones" },
    { id: 2, name: "Producto 2", category: "Hogar" },
    { id: 3, name: "Producto 3", category: "Colecciones" },
  ];
  const sizes = ["S", "M", "L", "XL"];

  const handleDelete = () => {
    if (!category || !product || !size) {
      alert("Por favor, selecciona todos los campos.");
      return;
    }

    console.log("Eliminando:", { category, product, size });
  };

  return (
    <div className="admin-delete-container">
      <h1 className="delete-title">Eliminar Producto</h1>
      <form className="delete-form">
        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <select 
            id="category"
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="product">Producto</label>
          <select 
            id="product"
            value={product} 
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="">Selecciona un producto</option>
            {products
              .filter((p) => p.category === category)
              .map((p) => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="size">Talla</label>
          <select 
            id="size"
            value={size} 
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Selecciona una talla</option>
            {sizes.map((sz, idx) => (
              <option key={idx} value={sz}>{sz}</option>
            ))}
          </select>
        </div>

        <button 
          type="button"
          className="delete-button"
          onClick={handleDelete}
        >
          Eliminar
        </button>

        <p className="notice">Seleccione todos los campos antes de eliminar.</p>
      </form>
    </div>
  );
};

export default AdminDelete;
