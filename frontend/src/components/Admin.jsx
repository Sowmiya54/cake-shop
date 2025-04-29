// src/components/Admin.js
import React, { useState } from 'react';
import '../styles/Admin.css';

const AdminPage = () => {
  // Sample initial cakes data
  const [cakes, setCakes] = useState([
    { id: 1, name: 'Chocolate Cake', image: 'images/m1.jpeg', weight: '500g', price: '₹500' },
    { id: 2, name: 'Vanilla Cake', image: 'images/m2.jpeg', weight: '500g', price: '₹480' },
    { id: 3, name: 'Strawberry Cake', image: 'images/m3.jpg', weight: '500g', price: '₹550' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCake, setNewCake] = useState({ name: '', image: '', weight: '', price: '' });

  // Handle form submission to add new cake
  const handleAddCake = (e) => {
    e.preventDefault();
    if (newCake.name && newCake.image && newCake.weight && newCake.price) {
      const id = cakes.length + 1;  // Simple way to generate new ID
      setCakes([...cakes, { ...newCake, id }]);
      setShowModal(false);
      setNewCake({ name: '', image: '', weight: '', price: '' });
    } else {
      alert('All fields are required');
    }
  };

  // Handle input changes for the new cake
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCake((prev) => ({ ...prev, [name]: value }));
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setNewCake({ name: '', image: '', weight: '', price: '' });
  };

  // Delete Cake
  const handleDeleteCake = (id) => {
    setCakes(cakes.filter(cake => cake.id !== id));
  };

  return (
    <div className="admin-container">
      <header>
        <h1>Cake Shop Admin Dashboard</h1>
        <button className="add-cake-btn" onClick={() => setShowModal(true)}>
          Add New Cake
        </button>
      </header>

      <section className="cakes-list">
        <h2>Manage Cakes</h2>
        <table className="cakes-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cakes.map((cake) => (
              <tr key={cake.id}>
                <td>{cake.name}</td>
                <td><img src={cake.image} alt={cake.name} className="cake-image" /></td>
                <td>{cake.weight}</td>
                <td>{cake.price}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn" onClick={() => handleDeleteCake(cake.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Modal for adding new cake */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Cake</h2>
            <form onSubmit={handleAddCake}>
              <label>
                Cake Name:
                <input
                  type="text"
                  name="name"
                  value={newCake.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  name="image"
                  value={newCake.image}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Weight:
                <input
                  type="text"
                  name="weight"
                  value={newCake.weight}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Price:
                <input
                  type="text"
                  name="price"
                  value={newCake.price}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit">Add Cake</button>
              <button type="button" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
