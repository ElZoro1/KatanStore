import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; 
import { auth, db } from '../../firebaseConfig'; 
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email,
        phone: phone,
        createdAt: new Date(),
      });

      setSuccess('¡Tu cuenta ha sido registrada con éxito!');
      setUsername('');
      setEmail('');
      setPassword('');
      setPhone('');

     
      setTimeout(() => {
        navigate('/'); 
      }, 2000);
      
    } catch (error) {
      setError(`Error en el registro: ${error.message}`);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Registro</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button className="register-button" type="submit">Registrarse</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>} 

        <div className="separator">o</div>
        <div className="social-icons">
          <i className="icon fab fa-facebook"></i>
          <i className="icon fab fa-google"></i>
          <i className="icon fab fa-windows"></i>
        </div>
      </div>
      <div className="register-banner">
        <img className="banner-image" src="2.png" alt="Katanstore Logo" />
        <h1>KATANSTORE</h1>
        <h1>REGISTRA TUS <span className="highlight">DATOS</span></h1>
      </div>
    </div>
  );
};

export default Register;
