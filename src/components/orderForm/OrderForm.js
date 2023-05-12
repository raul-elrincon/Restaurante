import React, { useState, useEffect } from "react";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import firebase from "../../firebase";
import "./OrderForm.css";

function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState("");
  const [address, setAddress] = useState("");
  const [orders, setOrders] = useState([]);
  const [editingId, setEditingId] = useState(null);


  const db = getDatabase();

  useEffect(() => {
    const ordersRef = ref(db, "orders");
    onValue(ordersRef, (snapshot) => {
      const ordersList = [];
      snapshot.forEach((childSnapshot) => {
        ordersList.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      setOrders(ordersList);
    });
  }, [db]);

  const handleRead = () => {
    const ordersRef = ref(db, "orders");
    onValue(ordersRef, (snapshot) => {
      const ordersList = [];
      snapshot.forEach((childSnapshot) => {
        ordersList.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      console.log(ordersList); // Agrega esta línea
      setOrders(ordersList);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ordersRef = ref(db, "orders");
    if (editingId) {
      handleUpdate(editingId, { name, phone, order, address });
      setEditingId(null);
    } else {
      const newOrderRef = push(ordersRef);
      set(newOrderRef, {
        name,
        phone,
        order,
        address,
      });
    }
    setName("");
    setPhone("");
    setOrder("");
    setAddress("");
  };
  

  const handleDelete = (id) => {
    const orderRef = ref(db, `orders/${id}`);
    set(orderRef, null);
  };

  const handleUpdate = (id, updatedOrder) => {
    const orderRef = ref(db, `orders/${id}`);
    set(orderRef, {
      name: updatedOrder.name,
      phone: updatedOrder.phone,
      order: updatedOrder.order,
      address: updatedOrder.address
    });
  };

  const handleEdit = (order) => {
    setName(order.name);
    setPhone(order.phone);
    setOrder(order.order);
    setAddress(order.address);
    setEditingId(order.id);
  };

  return (
    <div className="form-container">
      <form className="order-form" onSubmit={handleSubmit}>
        <h2>Realiza tu Pedido</h2>
        <div className="input-group">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name-input"
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="phone-input"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Order:
            <input
              type="text"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="order-input"
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="address-input"
            />
          </label>
        </div>
        <div className="button-group">
          <button type="submit" className="add-button">
            Insert
          </button>
          <button  type="button" className="read-button" onClick={handleRead}>
            Leer Base de Datos
          </button>
        </div>
      </form>
      <div className="orders-container">
        <h2>Pedidos en Marcha</h2>
        {orders.map((order) => (
          <div className="order" key={order.id}>
            <p>
              <strong>Nombre: </strong> {order.name}
            </p>
            <p>
              <strong>Teléfono: </strong> {order.phone}
            </p>
            <p>
              <strong>Pedido: </strong> {order.order}
            </p>
            <p>
              <strong>Dirección: </strong> {order.address}
            </p>
            <div className="button-group">
              <button
                className="delete-button"
                onClick={() => handleDelete(order.id)}
              >
                Eliminar
              </button>
              <button
                className="update-button"
                onClick={() => handleEdit(order)}
              >
                Actualizar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderForm;
