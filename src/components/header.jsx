import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleInmobiliariaClick = () => {
    navigate('/inmobiliaria');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="/">Hipotecas Online</a>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/prestamos">Préstamos</a></li>
            <li><a href="/ayuda">Ayuda</a></li>
            <li className="nav-buttons">
              <button className="cta-button" onClick={() => navigate('/formulario')}>
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