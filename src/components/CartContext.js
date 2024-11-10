
import React, { createContext, useContext, useState } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); 


    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
            
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
      
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    
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
