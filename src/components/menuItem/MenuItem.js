import React from 'react';
import './MenuItem.css';

function MenuItem({ title, description, price, image }) {
  return (
    <>
       <div className="menu-item">
        <div className="menu-item-image-container">
          <img className="menu-item-image" src={image} alt={title} />
        </div>
        <div className="menu-item-details">
          <h3 className="menu-item-title">{title}</h3>
          <p className="menu-item-description">{description}</p>
          <p className="menu-item-price">${price}</p>
        </div>
      </div>
    </>

  );
}

export default MenuItem;
