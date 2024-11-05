import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => (
  <section className="featured-products">
    <h2>Productos Destacados</h2>
    <div className="product-grid">
      <div className="product">
        <div className="product-image"></div>
        <h3>Producto - Nombre</h3>
        <p>$000.000</p>
      </div>
      {/* Repite este bloque para cada producto */}
    </div>
  </section>
);

export default FeaturedProducts;
