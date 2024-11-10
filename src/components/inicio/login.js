// src/components/inicio/Login.js
import React, { useState } from 'react';
import { auth } from '../../firebaseConfig'; // Importar la instancia de Firebase Auth
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
    setError(""); // Limpiar mensaje de error

    try {
      // Iniciar sesión con Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      
      navigate('/'); // Redirigir a la página principal si el inicio de sesión es exitoso
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
    </div>
  );
}

export default Login;
