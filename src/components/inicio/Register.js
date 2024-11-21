import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); 
    } catch (err) {
      console.error("Error en registro:", err);
      setError("Error en el registro. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleRegister}>
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
            placeholder="Tu correo electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <h2>Teléfono</h2>
          <input 
            type="tel" 
            placeholder="Tu número de teléfono" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
          <button type="submit" className="register-button">Registrarse</button>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {/* Sección de íconos de redes sociales */}
          <div className="social-login">
            <img 
              src="/faceboo.png" 
              alt="Registrar con Facebook" 
              className="social-icon" 
              onClick={() => alert('Registro con Facebook')} 
            />
            <img 
              src="/google.png" 
              alt="Registrar con Google" 
              className="social-icon" 
              onClick={() => alert('Registro con Google')} 
            />
            <img 
              src="windows.png"
              alt="Registrar con Microsoft" 
              className="social-icon" 
              onClick={() => alert('Registro con Microsoft')} 
            />
          </div>
        </form>
      </div>
      
      <div className="register-image-container">
        <img src="2.png" alt="Katanstore Logo" /> 
        <h1>REGISTRA TUS <span>DATOS</span></h1>
      </div>
    </div>
  );
}

export default Register;
