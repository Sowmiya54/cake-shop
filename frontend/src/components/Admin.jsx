import React, { useState } from 'react';
import '../styles/Admin.css';

const Admin = () => {
  const [orders, setOrders] = useState([]);

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
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
              <th>Image</th>
              <th>Address</th>
              <th>Delivery Date</th>
              <th>Status</th>
              <th>Delivered</th>
              <th>View Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.cake}</td>
                <td>
                  <img src={order.image} alt={order.cake} className="cake-img" />
                </td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button className="view-btn">View Order</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;

