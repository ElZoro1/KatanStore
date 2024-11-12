// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Nosotros from './components/nosotros/Nosotros';
import Login from './components/inicio/login';
import Register from './components/inicio/Register';
import Header from './components/nosotros/Header';
import Coleccione from './components/Coleccione/Colecciones';
import Cart from './components/Cart/Cart';
import AdminUpload from './components/admin/AdminUpload';
import AdminDelete from './components/admin/AdminDelete';
import WhatsAppButton from './components/WhatsAppButton'; // Asegúrate de que esta ruta sea correcta
import { AuthProvider } from './AuthContext';
import { CartProvider } from './components/CartContext';
import { ProductProvider } from './ProductContext'; // Verifica que ProductContext.js esté en la raíz de src

function App() {  
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider> 
          <Router>
            <div className="App">
              <Header />
              <WhatsAppButton /> {/* Botón de WhatsApp añadido aquí */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/colecciones" element={<Coleccione />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin/upload" element={<AdminUpload />} />
                <Route path="/admin/delete" element={<AdminDelete />} /> {/* Ruta para AdminDelete */}
              </Routes>
            </div>
          </Router>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
