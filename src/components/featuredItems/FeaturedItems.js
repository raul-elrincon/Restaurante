import React from "react";
import './FeaturedItems.css';
const FeaturedItems = () => {
  const items = [
    {
      id: 1,
      image: require("../../images/pexels-photo-5911151.jpg"),
      title: "Eventos especiales",
      description: "Celebre ocasiones especiales con nosotros"
    },
    {
      id: 2,
      image: require("../../images/pexels-photo-5967852.jpg"),
      title: "Menú personalizado",
      description: "Diseñe su propio menú con nuestras opciones personalizadas"
    },
    {
      id: 3,
      image: require("../../images/pexels-photo-4577410.jpg"),
      title: "Ambiente acogedor",
      description: "Disfrute de un ambiente cálido y acogedor para sus comidas"
    }
  ];

  return (
    <div className="featured-items-container">
      <h2>Destacados</h2>
      <div className="featured-items">
        {items.map(item => (
          <div key={item.id} className="featured-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
