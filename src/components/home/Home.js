// src/components/home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Importa useCart en lugar de CartContext
import './Home.css';

function Home() {
  const { addToCart } = useCart(); // Usamos useCart para obtener addToCart

  const products = [
    { id: 1, img: 'ropa1.png', name: 'Sword Art Online', price: 15000, size: 'M', stock: 10 },
    { id: 2, img: 'pole1.png', name: 'Dragon Ball', price: 20000, size: 'L', stock: 8 },
    { id: 3, img: 'pole2.jpg', name: 'Dragon Ball', price: 18500, size: 'S', stock: 5 },
    { id: 4, img: 'pole3.png', name: 'Jujutsu Kaisen', price: 22000, size: 'M', stock: 7 },
    { id: 5, img: 'pole4.png', name: 'Kimetsu no Yaiba', price: 17000, size: 'L', stock: 6 },
    { id: 6, img: 'pole5.png', name: 'Kimetsu no Yaiba', price: 19000, size: 'M', stock: 4 },
    { id: 7, img: 'pole6.png', name: 'Naruto', price: 23000, size: 'S', stock: 9 },
    { id: 8, img: 'pole7.png', name: 'Naruto', price: 25000, size: 'L', stock: 3 },
    { id: 9, img: 'pole8.png', name: 'Bleach', price: 21000, size: 'M', stock: 2 },
  ];

  const reviews = [
    "¡Qué rápida atención y excelente servicio!",
    "Me encanta la variedad de productos, ¡excelente calidad!",
    "¡Qué guapo está el diseño de la web, fácil de navegar!",
  ];

  return (
    <div className="home">
      <div className="banner">
        <Link to="/cart">
          <img src="/cart.png" alt="Carrito" className="icon cart-icon" />
        </Link>
        <div className="banner-item">
          <img src="jujutsu.png" alt="Producto destacado" />
          <div className="banner-text">
            <h2>YA LLEGARON NUEVAS POLERAS JUJUTSU KAISEN</h2>
            <button className="btn">Ir a lo Nuevo</button>
          </div>
        </div>
        <div className="banner-item">
          <img src="goku.png" alt="Colección" />
          <div className="banner-text">
            <h2>REVISA TODAS NUESTRAS COLECCIONES DISPONIBLES</h2>
            <button className="btn">Ir a Colecciones</button>
          </div>
        </div>
      </div>

      <div className="featured-products">
        <h3>Productos Destacados</h3>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-details">
                <p className="product-title">{product.name}</p>
                <p>Precio: ${product.price.toLocaleString()}</p>
                <p>Talla: {product.size}</p>
                <p>Stock: {product.stock} disponibles</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="customer-reviews">
        <h3>¿Qué piensan nuestros clientes?</h3>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <p>{review}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="contact">
          <h1>CONTACTANOS</h1>
          <p>+56 9 8765 4321</p>
          <p>contacto@katanstore.com</p>
        </div>

        <div className="footer-logo">
          <img src="/1.png" alt="Katanstore Logo" className="logo" />
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" alt="WhatsApp" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="/tiktok.png" alt="TikTok" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>

        <div className="hours">
          <h1>Horario de Atención</h1>
          <p>Lunes a Viernes: 9:00 - 18:00</p>
          <p>Sábados: 10:00 - 14:00</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
