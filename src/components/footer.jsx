import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              <a href="/">Hipotecas Online</a>
            </div>
            <p>Obtenga el préstamo que necesita de manera rápida y sencilla.</p>
          </div>
          <div className="footer-column">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Préstamos</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contacto</h3>
            <ul>
              <li>+54 11 1234-5678</li>
              <li>info@hipotecasonline.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Hipotecas Online. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;