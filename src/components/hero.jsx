// hero.jsx
import React from 'react';
import '../styles/hero.css';
import homeIlustration from '../assests/images/20945160.jpg';

const Hero = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.querySelector('.loan-calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-title">
            <span className="title-line">Tu crédito</span>
            <span className="title-line accent-text">hipotecario,</span>
            <span className="title-line">fácil y rápido</span>
          </h1>
          
          <p className="hero-description animate-description">
            Créditos hipotecarios para la compra de su vivienda con<br />
            las mejores tasas del mercado
          </p>
          
          <button className="cta-button" onClick={scrollToCalculator}>
            Simulá tu crédito
          </button>
        </div>

        <div className="hero-image-container">
          <img 
            src={homeIlustration}
            alt="Familia frente a su nueva casa"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;