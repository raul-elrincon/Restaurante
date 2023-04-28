import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine, RiSearchLine, RiShoppingCartLine, RiUserLine } from "react-icons/ri";
import logo from '../../images/Logo1.svg'
import './Header.css';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" /> <span>RauL´S</span>
      </Link>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <Link to="/">home</Link>
        <Link to="/menu">menu</Link>
        <Link to="/contacto">contacto</Link>
      </nav>

      <div className="icons">
        <div id="menu-btn" className="icon" onClick={toggleMenu}>
          <RiMenuLine />
        </div>
        <div id="search-btn" className="icon">
          <RiSearchLine />
        </div>
        <div id="cart-btn" className="icon">
          <RiShoppingCartLine />
        </div>
        <div id="login-btn" className="icon">
          <RiUserLine />
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={toggleMenu}>
          <div className="menu-content">
            <Link to="/">home</Link>
            <Link to="/menu">menu</Link>
            <Link to="/contacto">contacto</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;