import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nosotros from './components/nosotros/Nosotros';
import Home from './components/home/Home';
import Register from './components/inicio/Register'; // Ruta ajustada para Register.js
import Login from './components/inicio/login'; // Ruta ajustada para Login.js
import Header from './components/nosotros/Header'; // Ruta ajustada para Header.js

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta de inicio */}
          <Route path="/nosotros" element={<Nosotros />} /> {/* Ruta de Nosotros */}
          <Route path="/register" element={<Register />} /> {/* Ruta de Registro */}
          <Route path="/login" element={<Login />} /> {/* Ruta de Inicio de Sesión */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
