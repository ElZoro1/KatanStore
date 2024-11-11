import React, { useState } from 'react';
import './AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, date: '2023-10-11', status: 'En Espera', total: 30000 },
    { id: 2, date: '2023-10-12', status: 'Completado', total: 50000 },
  ]);

  const handleStatusChange = (id, status) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="admin-orders">
      <h2>Gestión de Pedidos</h2>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <p>Pedido #{order.id}</p>
            <p>Fecha: {order.date}</p>
            <p>Estado: {order.status}</p>
            <p>Total: ${order.total}</p>
            <select
              value={order.status}
              onChange={(e) => handleStatusChange(order.id, e.target.value)}
            >
              <option value="En Espera">En Espera</option>
              <option value="Completado">Completado</option>
              <option value="Cancelado">Cancelado</option>
              <option value="Reembolsado">Reembolsado</option>
              <option value="Fallo">Fallo</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
