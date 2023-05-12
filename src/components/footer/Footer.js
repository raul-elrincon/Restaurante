import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contáctanos</h3>
            <p>C. Pintor Pepe Dámaso, 55</p>
            <p>Las Palmas de Gran Canarias</p>
            <p>rauls@company.com</p>
            <p>Teléfono:+34 928344384</p>
          </div>
          <div className="col-md-4">
            <h3>Síguenos en redes sociales</h3>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://github.com/raul-elrincon/Restaurante.git" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Enlaces importantes</h3>
            <ul className="footer-links">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/menu">Menú</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
              <li>
                <a href="/noticias">Noticias</a>
              </li>
              <li>
                <a href="/nosotros">Sobre nosotros</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-muted small mb-4 mb-lg-0">
              &copy; {new Date().getFullYear()} Restaurante Todos los derechos reservados.{" "}
              <Link to="/politica-de-privacidad">Política de Privacidad y Cookies</Link> |{" "}
              <Link to="/condiciones-de-venta">Condiciones de Venta</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;