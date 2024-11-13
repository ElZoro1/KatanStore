import React from 'react';
import { useOrder } from '../../OrderContext';
import './OrderPage.css';

const OrderPage = () => {
  const { orders } = useOrder();

  return (
    <div className="order-page">
      <h2>Pedidos en Curso</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos en curso.</p>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <h3>Pedido #{order.id}</h3>
              <p>Estado: {order.status}</p>
              <p>Total: ${order.total.toLocaleString()}</p>
              <h4>Artículos:</h4>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
