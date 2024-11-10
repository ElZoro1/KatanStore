// src/components/inicio/Login.js
import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirige al Home después del inicio de sesión exitoso
    } catch (err) {
      console.error("Error en inicio de sesión:", err);
      setError("Credenciales incorrectas. Por favor, intente de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        
        <input 
          type="email" 
          placeholder="Tu correo" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Tu contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
        
        {error && <p className="error-message">{error}</p>} 

        <Link to="/register" className="register-link">
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>

      {/* Sección del banner, igual que en Register */}
      <div className="login-banner">
        <img src="2.png" alt="Logo" className="banner-image" /> {/* Reemplaza con el path correcto de tu logo */}
        <h1>TIENDA KATAN</h1>
        <h2>REGISTRA TUS <span className="highlight">DATOS</span></h2>
      </div>
    </div>
  );
}

export default Login;
