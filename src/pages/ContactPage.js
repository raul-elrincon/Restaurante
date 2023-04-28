import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contactForm/ContactForm";
import	'./ContactPage.css';
import ShopMap from "../components/shopmap/ShopMap";

function ContactPage() {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1>Contacto</h1>
        <p>¡Estamos encantados de ayudarte! Puedes ponerte en contacto con nosotros de las siguientes maneras:</p>
        <div className="contact-info">
          <h2>Información de contacto</h2>
          <ul>
            <li><strong>Dirección:</strong> C. Pintor Pepe Dámaso, 55</li>
            <li><strong>Teléfono:</strong> +34 928344384</li>
            <li><strong>Correo electrónico:</strong> rauls@company.com</li>
          </ul>
        </div>
        <ContactForm />
        <div className="contact-map">
          <h2>Encuéntranos</h2>
        </div>
        <ShopMap />
      </div>
      <Footer/>
    </div>
  );
}

export default ContactPage;
