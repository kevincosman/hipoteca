import React from 'react';
import '../styles/hero.css';
import financeImage from '../assests/images/finance.svg';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Obtené el préstamo que necesitas</h1>
        <p className="hero-description">
          Calcula tu préstamo y solicita en línea en pocos pasos. Sin papeleo innecesario, sin complicaciones.
        </p>
        <button className="hero-button">Calculá tu préstamo ahora</button>
      </div>
      <div className="hero-image">
        <img src={financeImage} alt="Crecimiento financiero" />
      </div>
    </div>
  );
};

export default Hero;