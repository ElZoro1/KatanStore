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
      navigate('/'); 
    } catch (err) {
      console.error("Error en inicio de sesión:", err);
      setError("Credenciales incorrectas. Por favor, intente de nuevo.");
    }
  };

  const handleSocialLogin = (platform) => {
    alert(`Iniciar sesión con ${platform} no está implementado aún.`);
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Correo electrónico</h2>
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <h2>Contraseña</h2>
          <input 
            type="password" 
            placeholder="Tu contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="login-button">Iniciar Sesión</button>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className="social-login">
            <img
              src="faceboo.png"
              alt="Iniciar sesión con Facebook"
              onClick={() => handleSocialLogin('Facebook')}
              className="social-icon"
            />
            <img
              src="/google.png"
              alt="Iniciar sesión con Google"
              onClick={() => handleSocialLogin('Google')}
              className="social-icon"
            />
            <img
              src="windows.png"
              alt="Iniciar sesión con Microsoft"
              onClick={() => handleSocialLogin('Microsoft')}
              className="social-icon"
            />
          </div>

          <p className="register-link">
            ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </form>
      </div>
      <div className="login-image-container">
        <img src="2.png" alt="Logo" />
        <h1>INGRESA TUS <span>DATOS</span></h1>
      </div>
    </div>
  );
}

export default Login;
