// src/components/Cart/Cart.js
import React from 'react';
import { useCart } from '../CartContext';
import './Cart.css';
function Cart() {
    const { cartItems, removeFromCart } = useCart();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>

            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price.toLocaleString()}</td>
                                    <td>${(item.price * item.quantity).toLocaleString()}</td>
                                    <td>
                                        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="cart-total">
                        <h3>Total: ${total.toLocaleString()}</h3>
                        <button className="checkout-btn">Proceder al pago</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
