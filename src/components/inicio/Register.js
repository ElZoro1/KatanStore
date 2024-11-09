// src/components/inicio/Register.js
import React, { useState } from 'react';
import './register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log('Correo:', email);
    console.log('Teléfono:', phone);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Nombre de Usuario</h2>
        <input
          type="text"
          placeholder="Tu nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h2>Contraseña</h2>
        <input
          type="password"
          placeholder="Tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <h2>Correo</h2>
        <input
          type="email"
          placeholder="Tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h2>Teléfono</h2>
        <input
          type="tel"
          placeholder="Tu teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="register-button" onClick={handleRegister}>
          Registrarse
        </button>

        <p className="separator">o</p>
        <div className="social-icons">
          <img src="/faceboo.png" alt="Facebook" className="icon" />
          <img src="/google.png" alt="Google" className="icon" />
          <img src="/windows.png" alt="Microsoft" className="icon" />
        </div>
      </div>

      <div className="register-banner">
        <img src="/2.png" alt="Katanstore Logo" className="banner-image" />
        <h1>REGISTRA TUS <span className="highlight">DATOS</span></h1>
      </div>
    </div>
  );
}

export default Register;
