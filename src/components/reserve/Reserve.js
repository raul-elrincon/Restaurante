import React, { useState } from "react";

const Reserve = () => {
  const [reservations, setReservations] = useState(10);

  const handleReservation = () => {
    if (reservations > 0) {
      setReservations(reservations - 1);
      alert("¡Reserva realizada con éxito!");
    } else {
      alert("Lo sentimos, no hay más reservas disponibles.");
    }
  };

  return (
    <div className="home-container">
      <h1>Haz tu reserva en RauL´S!!</h1>
      <p>¡Haz tu reserva ahora!</p>
      <button onClick={handleReservation}>Reservar</button>
      <p>Reservas disponibles: {reservations}</p>
    </div>
  );
};

export default Reserve;
