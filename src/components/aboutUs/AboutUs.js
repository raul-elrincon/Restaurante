import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Sobre Nosotros</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={require('../../images/about-us.jpg')} alt="Interior del restaurante" />
        </div>
        <div className="about-text">
          <p>¡Bienvenido a nuestro restaurante! Somos un negocio familiar que ha estado sirviendo comida deliciosa durante más de 20 años.</p>
          <p>Nuestra filosofía es simple: utilizar ingredientes frescos y de alta calidad para crear platos que sean tanto tradicionales como innovadores.</p>
          <p>Nuestros chefs tienen años de experiencia y son apasionados por crear nuevos y emocionantes platos para que nuestros huéspedes disfruten.</p>
          <p>Creemos que cenar debe ser una experiencia, por eso ofrecemos un ambiente cálido y acogedor que es perfecto para cualquier ocasión.</p>
          <p>Ya sea que vengas para un almuerzo rápido o una cena romántica, tenemos algo para todos.</p>
          <p>¡Gracias por elegir nuestro restaurante y esperamos servirte pronto!</p>
        </div>
      </div>
      <div className="about-team">
        <h2>Nuestro Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={require('../../images/chef.jpg')} alt="Chef 1" />
            <h3>Juan Pérez</h3>
            <p>Chef Principal</p>
          </div>
          <div className="team-member">
            <img src={require('../../images/chef5.jpg')} alt="Chef 2" />
            <h3>Wang López</h3>
            <p>Chef Asistente</p>
          </div>
          <div className="team-member">
            <img src={require('../../images/chef3.jpg')} alt="Mesero 1" />
            <h3>Marcos García</h3>
            <p>Camarero</p>
          </div>
          <div className="team-member">
            <img src={require('../../images/chef4.jpg')} alt="Mesero 2" />
            <h3>Samantha Rodríguez</h3>
            <p>Camarero</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
