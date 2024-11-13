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
import OrderPage from './components/admin/OrderPage';
import WhatsAppButton from './components/WhatsAppButton'; 
import { AuthProvider } from './AuthContext';
import { CartProvider } from './components/CartContext';
import { ProductProvider } from './ProductContext';
import { OrderProvider } from './OrderContext';

function App() {  
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <OrderProvider> 
            <Router>
              <div className="App">
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/nosotros" element={<Nosotros />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/colecciones" element={<Coleccione />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/admin/upload" element={<AdminUpload />} />
                  <Route path="/admin/delete" element={<AdminDelete />} />
                  <Route path="/admin/orders" element={<OrderPage />} />
                </Routes>
                <WhatsAppButton /> 
              </div>
            </Router>
          </OrderProvider>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
