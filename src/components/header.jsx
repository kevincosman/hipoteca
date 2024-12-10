import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleInmobiliariaClick = () => {
    closeMenu();
    navigate('/inmobiliaria');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="/">Hipotecas Online</a>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><a href="/nosotros" onClick={closeMenu}>Nosotros</a></li>
            <li><a href="/prestamos" onClick={closeMenu}>Préstamos</a></li>
            <li><a href="/ayuda" onClick={closeMenu}>Ayuda</a></li>
            <li className="nav-buttons">
              <button
                className="cta-button"
                onClick={() => {
                  closeMenu();
                  navigate('/formulario');
                }}>
                Solicitá tu préstamo
              </button>
              <button className="secondary-button" onClick={handleInmobiliariaClick}>
                Soy inmobiliaria
              </button>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="cta-button" onClick={() => navigate('/formulario')}>
            Solicitá tu préstamo
          </button>
          <button className="secondary-button" onClick={handleInmobiliariaClick}>
            Soy inmobiliaria
          </button>
        </div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;