// src/components/admin/OrderPage.js
import React from 'react';
import { useOrder } from '../../OrderContext';
import './OrderPage.css';

const OrderPage = () => {
  const { orders, updateOrderStatus, deleteOrder } = useOrder();

  return (
    <div className="order-page">
      <h1>Pedidos en Curso</h1>
      {orders.length === 0 ? (
        <p>No hay pedidos en curso.</p>
      ) : (
        orders.map((order, index) => (
          <div key={order.id} className="order-card">
            <h3>Pedido {index + 1}</h3>
            <p className="order-number">Número de orden: #{order.id}</p>
            
            {/* Estado actual del pedido */}
            <p className="order-status"><strong>Estado:</strong> {order.estado}</p>

            {/* Verificación para evitar errores si el total no está definido */}
            <p className="total-label"><strong>Total:</strong> ${order.total ? order.total.toLocaleString() : 'N/A'}</p>

            {/* Listado de productos en el pedido */}
            {order.productos && order.productos.length > 0 && (
              <div className="product-details">
                <h4 className="products-label">Productos:</h4>
                <ul>
                  {order.productos.map((producto, i) => (
                    <li key={i}>
                      {producto.name} - Cantidad: {producto.quantity} - Precio: ${producto.price ? producto.price.toLocaleString() : 'N/A'}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="status-buttons">
              {['Esperando Confirmación', 'En Espera', 'Completado', 'Cancelado', 'Reembolsado', 'Fallo'].map((status) => (
                <button
                  key={status}
                  className={order.estado === status ? 'active' : ''}
                  onClick={() => updateOrderStatus(order.id, status)}
                >
                  {status}
                </button>
              ))}
            </div>

            <button
              className="delete-order-button"
              onClick={() => deleteOrder(order.id)}
            >
              Eliminar pedido
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderPage;
