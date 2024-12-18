import React from 'react';
import './Nosotros.css';

function Nosotros() {
  return (
    <div className="nosotros">

      <section className="main-image">
        <img src="/2.png" alt="Imagen Principal" />
        <h1>KATANSTORE</h1>
      </section>
      <section className="intro">
        <p>
          Somos una pyme apasionada por conectar a nuestros clientes con productos inspirados en la cultura nipona.
          Nuestro objetivo es ofrecer una experiencia de compra única, combinando artículos auténticos con un servicio rápido
          y personalizado. Desde nuestras raíces hemos trabajado para brindar productos de calidad que reflejan la esencia
          de Japón, adaptándonos a las necesidades de nuestros clientes y priorizando una atención ágil a través de canales
          de mensajería instantánea. Con cada compra, buscamos acercarte a un pedazo de la cultura japonesa, haciendo de cada
          elección un viaje a sus tradiciones y estilo.
        </p>
      </section>
      <section className="commitment">
        <div className="commitment-item">
          <img src="/3.png" alt="Compromiso" />
          <p>
            Nos comprometemos a ofrecer productos de alta calidad y un servicio al cliente excepcional, asegurando una
            experiencia de compra rápida, segura y satisfactoria. Nos esforzamos por mantener altos estándares en cada etapa
            del proceso, desde la selección de productos hasta la entrega, para superar siempre tus expectativas.
          </p>
        </div>
        <div className="commitment-item">
          <img src="/4.png" alt="Calidad" />
          <p>
            Nuestro servicio garantiza un proceso de compra y entrega impecable, donde cada detalle es cuidadosamente
            supervisado para asegurar que recibas tus productos en perfectas condiciones. Desde la selección hasta el empaque,
            priorizamos la higiene y el cuidado en cada paso, para que disfrutes de una experiencia de compra limpia, segura y confiable.
          </p>
        </div>
      </section>
      <footer className="footer">
  <div className="contact">
    <h1>CONTACTANOS</h1>
    <p>+56 9 8765 4321</p>
    <p>contacto@katanstore.com</p>
    <button
      className="location-button"
      onClick={() =>
        window.open(
          'https://www.google.cl/maps/place/La+Condesa,+La+Florida,+Regi%C3%B3n+Metropolitana/@-33.5445009,-70.5769715,17.63z/data=!4m6!3m5!1s0x9662d0df0b107de9:0x969edcf46a91acf3!8m2!3d-33.54423!4d-70.5758719!16s%2Fg%2F1tcz9jfg?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D',
          '_blank'
        )
      }
    >
      Ver ubicación de la tienda
    </button>
  </div>
  <div className="footer-logo">
    <img src="1.png" alt="Katanstore Logo" className="logo" />
    <div className="social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="instagram.png" alt="Instagram" />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <img src="whatsapp.png" alt="WhatsApp" />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <img src="tiktok.png" alt="TikTok" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="facebook.png" alt="Facebook" />
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

export default Nosotros;
