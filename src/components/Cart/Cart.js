// src/components/Cart/Cart.js
import React from 'react';
import { useCart } from '../CartContext'; // Importar el contexto del carrito
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, calculateTotal } = useCart(); // Obtener datos y funciones del contexto

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Carrito de Compras</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Tu carrito está vacío.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Línea de la imagen eliminada */}
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-info">Cantidad: {item.quantity}</p>
                <p className="cart-item-info">Precio: ${item.price.toLocaleString()}</p>
                <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary">
        <input type="text" placeholder="Cupón de descuento" className="coupon-input" />
        <button className="apply-coupon-button">Aplicar</button>
        
        <div className="summary-total">
          <p>Total: ${calculateTotal().toLocaleString()}</p>
        </div>
        
        <button className="checkout-button">Proceder al pago</button>
        <p className="terms">Al presionar "Proceder al pago" aceptas nuestros <a href="/">Términos y Condiciones</a>.</p>
      </div>
    </div>
  );
};

export default Cart;
