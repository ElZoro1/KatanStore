// src/components/CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Crear contexto del carrito
export const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); // Estado del carrito, inicializado como array vacío

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // Si el producto ya está en el carrito, aumenta la cantidad
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // Si no está, lo agrega con cantidad inicial de 1
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // Función para eliminar productos del carrito
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);
