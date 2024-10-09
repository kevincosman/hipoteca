import React from 'react';
import '../styles/hero.css';
import financeImage from '../assests/images/finance.svg';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Tu crédito hipotecario, fácil y rápido</h1>
        <p className="hero-description">
          Créditos hipotecarios para la compra de su vivienda
        </p>
        <button className="hero-button">Calculá tu crédito ahora</button>
      </div>
      <div className="heroImageFinance">
        <img src={financeImage} alt="Crecimiento financiero" />
      </div>
    </div>
  );
};

export default Hero;