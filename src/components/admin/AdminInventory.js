import React, { useState } from 'react';
import './AdminInventory.css';

const AdminInventory = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', img: '' });

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', price: '', img: '' });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="admin-inventory">
      <h2>Gestión de Inventario</h2>
      <div className="add-product">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={newProduct.img}
          onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })}
        />
        <button onClick={handleAddProduct}>Agregar Producto</button>
      </div>

      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => handleDeleteProduct(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminInventory;
