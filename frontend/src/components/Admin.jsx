import React, { useEffect, useState } from 'react';
import '../styles/Admin.css';

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/orders')
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order._id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="admin-dashboard">
      <h1 className="title">CakeWorld Admin Dashboard</h1>
      <div className="table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Customer Name</th>
              <th>Cake</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Delivery Date</th>
              <th>Status</th>
              <th>Delivered</th>
              <th>View Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="9">No orders available</td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.deliveryDetails.name}</td>
                  <td>{order.cartItems.map(item => item.name).join(', ')}</td>
                  <td>{order.deliveryDetails.phoneNumber}</td>
                  <td>{order.deliveryDetails.address}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td>
                    <select
                      value={order.status || 'Pending'}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <button className="view-btn" onClick={() => handleViewOrder(order)}>
                      View Order
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="order-modal">
          <div className="order-modal-content">
            <h2>🍰 Order Summary</h2>

            <div className="cake-img-gallery">
              {selectedOrder.cartItems.map((item, index) => (
                <div key={index} className="cake-card">
                  <img src={item.image} alt={item.name} className="cake-img-large" />
                  <p><strong>{item.name}</strong></p>
                  <p>Weight: {item.weight}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="order-details">
              <p><strong>👤 Name:</strong> {selectedOrder.deliveryDetails.name}</p>
              <p><strong>📞 Phone:</strong> {selectedOrder.deliveryDetails.phoneNumber}</p>
              <p><strong>📍 Address:</strong> {selectedOrder.deliveryDetails.address}</p>
              <p><strong>📅 Delivery Date:</strong> {new Date(selectedOrder.createdAt).toLocaleString()}</p>
              <p><strong>💰 Total:</strong> ₹{selectedOrder.totalAmount}</p>
              <p><strong>📦 Status:</strong> {selectedOrder.status}</p>
            </div>

            <button className="close-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
