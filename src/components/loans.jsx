import React, { useEffect, useRef } from 'react';
import '../styles/loans.css';

const Loans = () => {
  const processRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const processSteps = processRef.current.querySelectorAll('.process-step');
    processSteps.forEach((step) => observer.observe(step));

    return () => {
      processSteps.forEach((step) => observer.unobserve(step));
    };
  }, []);

  return (
    <div className="loans-container">
      <header className="loans-header">
        <h1 className="loans-title">Nuestros Préstamos</h1>
        <p className="loans-subtitle">Soluciones financieras adaptadas a tus necesidades</p>
      </header>
      
      <section className="loans-intro">
        <div className="intro-content">
          <h2>Opciones de Financiamiento</h2>
          <p>
            En Hipotecas Online, ofrecemos una variedad de préstamos hipotecarios diseñados para adaptarse a diferentes situaciones y necesidades. Nuestro objetivo es hacer realidad tu sueño de tener una casa propia con términos flexibles y tasas competitivas.
          </p>
        </div>
      </section>
      
      <section className="loans-types">
        <div className="loan-card">
          <h3>Sistema Francés</h3>
          <ul>
            <li>Crédito en U$S todo destino</li>
            <li>Hasta un 40% del valor de tasación</li>
            <li>Hasta cinco años de plazo</li>
            <li>Tasa fija (13% a 16%)</li>
            <li>Posibilidad de precancelar total o parcialmente en cualquier momento, sin penalidad</li>
          </ul>
        </div>
        <div className="loan-card">
          <h3>Sistema Americano</h3>
          <ul>
            <li>Crédito en U$S todo destino</li>
            <li>Hasta un 35% del valor de tasación</li>
            <li>Hasta dos años de plazo</li>
            <li>Tasa fija (13% a 16%)</li>
            <li>Posibilidad de precancelar total o parcialmente en cualquier momento, sin penalidad</li>
          </ul>
        </div>
      </section>    
      
      <section className="loans-process" ref={processRef}>
        <h2>Proceso de Préstamo</h2>
        <div className="process-container">
          <div className="process-step">
            <div className="step-content">
              <div className="step-number">1</div>
              <h3>Solicitud en línea</h3>
              <p>Completa nuestra solicitud en línea con tus datos personales y financieros.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-content">
              <div className="step-number">2</div>
              <h3>Evaluación crediticia</h3>
              <p>Analizamos tu historial crediticio y capacidad de pago.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-content">
              <div className="step-number">3</div>
              <h3>Aprobación preliminar</h3>
              <p>Te notificamos sobre la pre-aprobación de tu préstamo.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-content">
              <div className="step-number">4</div>
              <h3>Tasación de la propiedad</h3>
              <p>Evaluamos el valor de la propiedad que deseas adquirir.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-content">
              <div className="step-number">5</div>
              <h3>Aprobación final</h3>
              <p>Confirmamos la aprobación final de tu préstamo hipotecario.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-content">
              <div className="step-number">6</div>
              <h3>Firma de documentos</h3>
              <p>Firmamos los documentos legales necesarios para formalizar el préstamo.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-content">
              <div className="step-number">7</div>
              <h3>Desembolso del préstamo</h3>
              <p>Transferimos los fondos para la compra de tu nueva propiedad.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="loans-cta">
        <h2>¿Listo para dar el siguiente paso?</h2>
        <button className="cta-button">Solicita tu préstamo ahora</button>
      </section>
    </div>
  );
};

export default Loans;