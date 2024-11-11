// src/components/admin/AdminInventory.js
import React, { useState } from 'react';
import { useProducts } from '../../ProductContext';

const AdminInventory = () => {
  const { addProduct } = useProducts();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState('');
  const [category, setCategory] = useState('Home');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear objeto del producto con datos e imagen como URL temporal (local)
    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(price),
      sizes: sizes.split(',').map(size => size.trim()),
      category,
      image: image ? URL.createObjectURL(image) : null,
    };

    addProduct(newProduct);

    // Limpiar el formulario
    setProductName('');
    setPrice('');
    setSizes('');
    setCategory('Home');
    setImage(null);
  };

  return (
    <div className="product-upload-form">
      <h2>Subir Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre del producto</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Nombre del producto"
          required
        />

        <label>Precio</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio del producto"
          required
        />

        <label>Tallas (separadas por comas)</label>
        <input
          type="text"
          value={sizes}
          onChange={(e) => setSizes(e.target.value)}
          placeholder="Ejemplos: S, M, L, XL"
          required
        />

        <label>Categoría</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Home">Home</option>
          <option value="Colecciones">Colecciones</option>
        </select>

        <label>Imagen del producto</label>
        <input type="file" onChange={handleImageChange} required />

        <button type="submit">Subir producto</button>
      </form>
    </div>
  );
};

export default AdminInventory;
