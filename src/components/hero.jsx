import React from 'react';
import '../styles/hero.css';
import financeImage from '../assests/images/finance.svg';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Obtené el préstamo que necesitas</h1>
        <p>Calcula tu préstamo y solicita en línea en pocos pasos. Sin papeleo innecesario, sin complicaciones.</p>
        <button className="cta-button">Calculá tu préstamo ahora</button>
      </div>
      <div className="hero-image">
        <img src={financeImage} alt="Ilustración de Préstamos" />
      </div>
    </section>
  );
};

export default Hero;