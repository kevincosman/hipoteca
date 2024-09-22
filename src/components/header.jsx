import React from 'react';
import '../styles/header.css'; // Archivo CSS para estilo
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <h1>Hipotecas Online</h1> {/* Este puede reemplazarse por un logo más adelante */}
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/prestamos">Préstamos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <button className="cta-header">Solicitá tu préstamo</button>
    </header>
  );
};

export default Header;
