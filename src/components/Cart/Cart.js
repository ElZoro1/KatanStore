import React from 'react';
import { useCart } from '../CartContext';
import { useOrder } from '../../OrderContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, calculateTotal, clearCart } = useCart();
  const { addOrder } = useOrder();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      status: 'En curso',
      total: calculateTotal(),
    };

    addOrder(newOrder);
    clearCart();
    alert('Pedido realizado con éxito');
  };

  const handleTransferPayment = () => {
    const message = `Hola, buenas. Quiero pagar con transferencia. Mi total es: $${calculateTotal().toLocaleString()}`;
    const whatsappURL = `https://wa.me/56983479764?text=${encodeURIComponent(message)}`; 
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Carrito de Compras</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Tu carrito está vacío.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-info">Cantidad: {item.quantity}</p>
                <p className="cart-item-info">Precio: ${item.price.toLocaleString()}</p>
                <button
                  className="remove-item-button"
                  onClick={() => removeFromCart(item.id)}
                >
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
        <button className="checkout-button" onClick={handleCheckout}>
          Proceder al pago
        </button>
        <button className="transfer-button" onClick={handleTransferPayment}>
          Pagar con Transferencia
        </button>

        <p className="terms">
          Al presionar "Proceder al pago" aceptas nuestros <a href="/">Términos y Condiciones</a>.
        </p>
      </div>
    </div>
  );
};

export default Cart;
