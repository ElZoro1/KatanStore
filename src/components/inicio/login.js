// src/components/inicio/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión (usando Firebase o tu backend)
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
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
        
        <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
        
        <Link to="/register" className="register-link">
          Regístrate
        </Link>
        
        <p className="separator">o</p>
        <div className="social-icons">
          <img src="/faceboo.png" alt="Facebook" className="icon" />
          <img src="/google.png" alt="Google" className="icon" />
          <img src="/windows.png" alt="Microsoft" className="icon" />
        </div>
      </div>

      <div className="login-banner">
        <img src="/2.png" alt="Katanstore Logo" className="banner-image" />
        <h1>INGRESA TUS <span className="highlight">DATOS</span></h1>
      </div>
    </div>
  );
}

export default Login;
