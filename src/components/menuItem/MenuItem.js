import React from 'react';
import './MenuItem.css';

function MenuItem({ title, description, price, image }) {
  return (
    <>
      <div className="menu-item">
        <div className="menu-item__image-container">
          <img className="menu-item__image" src={image} alt={title} />
        </div>
        <div className="menu-item__details">
          <h3 className="menu-item__title">{title}</h3>
          <p className="menu-item__description">{description}</p>
          <p className="menu-item__price">${price}</p>
        </div>
      </div>
    </>

  );
}

export default MenuItem;
