
import React from 'react';
import { useOrder } from '../../OrderContext';
import './OrderPage.css';

const OrderPage = () => {
  const { orders, updateOrderStatus, deleteOrder } = useOrder();

  return (
    <div className="order-page">
      <h1>Pedidos en Curso</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>PEDIDO</th>
            <th>FECHA</th>
            <th>ESTADO</th>
            <th>TOTAL</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.fecha ? order.fecha.toLocaleDateString() : '14/11/2024'}</td>
              <td>{order.estado}</td>
              <td>${order.total ? order.total.toLocaleString() : 'N/D'}</td>
              <td>
                <button className="action-button delete" onClick={() => deleteOrder(order.id)}>
                  Eliminar
                </button>
                <select
                  className="action-select"
                  value={order.estado}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                >
                  <option value="Esperando Confirmación">Esperando Confirmación</option>
                  <option value="En Espera">En Espera</option>
                  <option value="Completado">Completado</option>
                  <option value="Cancelado">Cancelado</option>
                  <option value="Reembolsado">Reembolsado</option>
                  <option value="Fallo">Fallo</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
