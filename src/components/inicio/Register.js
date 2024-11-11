// src/components/inicio/Register.js
import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirigir a la página principal después del registro
    } catch (err) {
      console.error("Error en registro:", err);
      setError("Error en el registro. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Correo Electrónico</h2>
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
          <button type="submit" className="register-button">Registrarse</button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Register;
