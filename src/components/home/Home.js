import React from 'react';
import './Home.css';

function Home() {
  // Lista de productos con imagen, nombre y precio
  const products = [
    { img: 'ropa1.png', name: 'sword art online', price: '$15.000' },
    { img: 'pole1.png', name: 'dragon ball', price: '$20.000' },
    { img: 'pole2.jpg', name: 'dragon ball', price: '$18.500' },
    { img: 'pole3.png', name: 'JUJUTSU KAISEN', price: '$22.000' },
    { img: 'pole4.png', name: 'kimetsu no yaiba', price: '$17.000' },
    { img: 'pole5.png', name: 'kimetsu no yaiba', price: '$19.000' },
    { img: 'pole6.png', name: 'Naruto', price: '$23.000' },
    { img: 'pole7.png', name: 'Naruto', price: '$25.000' },
    { img: 'pole8.png', name: 'bleach', price: '$21.000' },
  ];

  // Lista de comentarios de ejemplo
  const reviews = [
    "¡Qué rápida atención y excelente servicio!",
    "Me encanta la variedad de productos, ¡excelente calidad!",
    "¡Qué guapo está el diseño de la web, fácil de navegar!",
  ];

  return (
    <div className="home">
      {/* Sección del banner principal */}
      <div className="banner">
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
            <button className="btn">
              <a href="#colecciones" style={{ color: 'inherit', textDecoration: 'none' }}>Ir a Colecciones</a>
            </button>
          </div>
        </div>
      </div>

      {/* Sección de productos destacados (Colecciones) */}
      <div id="colecciones" className="featured-products">
        <h3>Productos Destacados</h3>
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-details">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="add-to-cart-btn">Agregar al carrito</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de opiniones de clientes */}
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

      {/* Pie de página */}
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
