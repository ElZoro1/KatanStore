// src/OrderContext.js
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([
    {
      id: '1731471804536',
      estado: 'Esperando Confirmación',
      productos: [
        { nombre: 'Polera Goku', cantidad: 2, precio: 15000 },
        { nombre: 'Polera Vegeta', cantidad: 1, precio: 20000 }
      ]
    },
    {
      id: '1731471804537',
      estado: 'En Espera',
      productos: [
        { nombre: 'Polera Naruto', cantidad: 3, precio: 12000 }
      ]
    },
    {
      id: '1731471804538',
      estado: 'Completado',
      productos: [
        { nombre: 'Polera Bleach', cantidad: 1, precio: 18000 },
        { nombre: 'Polera Jujutsu Kaisen', cantidad: 2, precio: 22000 }
      ]
    }
  ]);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, estado: newStatus } : order
      )
    );
  };

  const deleteOrder = (orderId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  };

  // Nueva función addOrder para agregar un nuevo pedido
  const addOrder = (order) => {
    setOrders(prevOrders => [...prevOrders, order]);
  };

  return (
    <OrderContext.Provider value={{ orders, updateOrderStatus, deleteOrder, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
