import React from 'react';
import './register.css';

function Register() {
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>𝕽𝖊𝖌í𝖘𝖙𝖗𝖆𝖙𝖊</h2>
        
        <label>Nombre de Usuario</label>
        <input type="text" placeholder="Tu nombre de usuario" />

        <label>Contraseña</label>
        <input type="password" placeholder="Tu contraseña" />

        <label>Correo</label>
        <input type="email" placeholder="Tu correo" />

        <label>Teléfono</label>
        <input type="tel" placeholder="Tu teléfono" />

        <button className="register-button">Registrarse</button>

        <div className="social-login">
          <span>o</span>
          <div className="social-icons">
            <img src="/faceboo.png" alt="Facebook" />
            <img src="/google.png" alt="Google" />
            <img src="/windows.png" alt="Microsoft" />
          </div>
        </div>
      </div>

      <div className="register-image">
        <img src="/2.png" alt="Katanstore Logo" />
        <h2>REGISTRA TUS <span>DATOS</span></h2>
      </div>
    </div>
  );
}

export default Register;
