import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Encabezado */}
      <header>
        <div className="logo">KATANSTORE</div>
        <nav>
          <ul>
            <li><a href="a">Inicio</a></li>
            <li><a href="a">Colecciones</a></li>
            <li><a href="a">Nosotros</a></li>
          </ul>
        </nav>
        <div className="search-cart">
          <input type="text" placeholder="Buscar tu ropa" />
          <button className="cart-button">🛒</button>
        </div>
      </header>

      {/* Carrusel */}
      <section className="carousel">
        <div className="carousel-item">
          <img src="jujutsu.jpg" alt="Poleras Jujutsu Kaisen" />
          <div className="carousel-text">
            <h2>Ya llegaron nuevas poleras Jujutsu Kaisen</h2>
            <button>Ir a lo nuevo</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="coleccion.jpg" alt="Colección disponible" />
          <div className="carousel-text">
            <h2>Revisa todas nuestras colecciones disponibles</h2>
            <button>Ir a colecciones</button>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-grid">
          {/* Repetir este bloque para cada producto */}
          <div className="product">
            <div className="product-image"></div>
            <h3>Producto - Nombre</h3>
            <p>$000.000</p>
          </div>
        </div>
      </section>

      {/* Opiniones de Clientes */}
      <section className="customer-reviews">
        <h2>¿Qué piensan nuestros clientes?</h2>
        <div className="review-grid">
          <div className="review"></div>
          <div className="review"></div>
          <div className="review"></div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="contact-info">
          <p>Contáctanos: contacto@katanstore.cl | +56xxxxxxxx</p>
        </div>
        <div className="social-media">
          <img src="logo.png" alt="Logo Katanstore" />
          <div className="social-icons">
            <a href="a">Instagram</a>
            <a href="a">Facebook</a>
            <a href="a">Twitter</a>
          </div>
        </div>
        <div className="hours">
          <p>Horario de Atención:</p>
          <p>10:30 - 20:30 (Lunes a Viernes)</p>
          <p>10:30 - 18:30 (Sábados, Domingos y Festivos)</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
