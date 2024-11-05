import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="contact-info">
      <p>Contáctanos: contacto@catanstore.cl | +56xxxxxxxx</p>
    </div>
    <div className="social-media">
      <img src="logo.png" alt="Logo Catanstore" />
      <div className="social-icons">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
      </div>
    </div>
    <div className="hours">
      <p>Horario de Atención:</p>
      <p>10:30 - 20:30 (Lunes a Viernes)</p>
      <p>10:30 - 18:30 (Sábados, Domingos y Festivos)</p>
    </div>
  </footer>
);

export default Footer;
