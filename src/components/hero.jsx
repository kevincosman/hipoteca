import React, { useEffect } from 'react';
import '../styles/hero.css';

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

  useEffect(() => {
    const addAnimation = () => {
      const content = document.querySelector('.hero-content');
      content.classList.add('animate-in');
    };
    
    setTimeout(addAnimation, 100);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="title-container">
            <h1 className="hero-title">
              <span className="title-line">Tu crédito</span>
              <span className="title-line accent-text">hipotecario,</span>
              <span className="title-line">fácil y rápido</span>
            </h1>
            
            <p className="hero-description">
              Créditos hipotecarios para la compra de tu vivienda con <br />
              las mejores tasas del mercado
            </p>
            
            <button className="cta-button" onClick={scrollToCalculator}>
              Simulá tu crédito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;