import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Nosotros from './components/nosotros/Nosotros';
import Login from './components/inicio/login';
import Register from './components/inicio/Register'; 
import Header from './components/nosotros/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Ruta para registro */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

