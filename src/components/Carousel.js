import React from 'react';
import './Carousel.css';

const Carousel = () => (
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
);

export default Carousel;
