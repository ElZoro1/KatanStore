// src/components/admin/OrderPage.js
import React from 'react';
import { useOrder } from '../../OrderContext';
import './OrderPage.css';

const OrderPage = () => {
  const { orders, updateOrderStatus, deleteOrder } = useOrder();

  return (
    <div className="order-page">
      <h1>Pedidos</h1>

      <div className="status-buttons">
        {['Esperando Confirmación', 'En Espera', 'Completado', 'Cancelado', 'Reembolsado', 'Fallo'].map((status) => (
          <button key={status} className="status-filter">
            {status}
          </button>
        ))}
      </div>


      <table className="order-table">
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-message">No hay pedidos en curso.</td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date || "Fecha no disponible"}</td>
                <td>{order.estado}</td>
                <td>${order.total ? order.total.toLocaleString() : 'N/D'}</td>
                <td>
                  <button onClick={() => deleteOrder(order.id)} className="action-button delete">Eliminar</button>
                  <select
                    className="action-select"
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    value={order.estado}
                  >
                    {['Esperando Confirmación', 'En Espera', 'Completado', 'Cancelado', 'Reembolsado', 'Fallo'].map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="bulk-actions">
        <select className="bulk-select">
          <option>Acciones En Lote</option>
          <option>Eliminar seleccionados</option>
          <option>Marcar como Completado</option>
        </select>
        <button className="apply-button">Aplicar</button>
      </div>
    </div>
  );
};

export default OrderPage;
