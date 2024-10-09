import React from 'react';
import '../styles/aboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1 className="about-us-title">Sobre Nosotros</h1>
        <p className="about-us-subtitle">Innovando en préstamos hipotecarios desde 2010</p>
      </header>
      
      <section className="about-us-intro">
        <div className="intro-content">
          <h2>Nuestra Historia</h2>
          <p>
            En Hipotecas Online, nos dedicamos a proporcionar soluciones financieras innovadoras y accesibles para la compra de viviendas. Nuestra misión es simplificar el proceso de obtención de préstamos hipotecarios, ofreciendo un servicio integral y personalizado a cada uno de nuestros clientes.
          </p>
        </div>
        <div className="intro-icon">
          <div className="history-icon"></div>
        </div>
      </section>
      
      <section className="about-us-features">
        <div className="feature-card">
          <div className="feature-icon users-icon"></div>
          <h3>Nuestro Equipo</h3>
          <p>Contamos con expertos financieros dedicados a encontrar la mejor solución para tus necesidades de vivienda.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon building-icon"></div>
          <h3>Nuestra Experiencia</h3>
          <p>Con años en el mercado, hemos ayudado a miles de familias a conseguir el hogar de sus sueños.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon award-icon"></div>
          <h3>Nuestro Compromiso</h3>
          <p>Nos esforzamos por ofrecer las mejores tasas y condiciones, garantizando transparencia en todo el proceso.</p>
        </div>
      </section>
      
      <section className="about-us-stats">
        <div className="stat-item">
          <h4>+10,000</h4>
          <p>Clientes satisfechos</p>
        </div>
        <div className="stat-item">
          <h4>$500M</h4>
          <p>En préstamos otorgados</p>
        </div>
        <div className="stat-item">
          <h4>98%</h4>
          <p>Tasa de aprobación</p>
        </div>
      </section>
      
      <section className="about-us-mission-vision">
        <div className="mission-vision-card">
          <h2>Nuestra Misión</h2>
          <p>Facilitar el acceso a la vivienda propia a través de soluciones financieras innovadoras, transparentes y adaptadas a las necesidades de cada cliente.</p>
        </div>
        <div className="mission-vision-card">
          <h2>Nuestra Visión</h2>
          <p>Establecernos como la opción preferida para préstamos hipotecarios en línea, reconocidos por nuestra dedicación a la satisfacción del cliente y nuestra capacidad para innovar.</p>
        </div>
      </section>
      
      <section className="about-us-values">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon integrity-icon"></div>
            <span>Integridad en cada transacción</span>
          </div>
          <div className="value-item">
            <div className="value-icon innovation-icon"></div>
            <span>Innovación constante en nuestros servicios</span>
          </div>
          <div className="value-item">
            <div className="value-icon commitment-icon"></div>
            <span>Compromiso con la satisfacción del cliente</span>
          </div>
          <div className="value-item">
            <div className="value-icon responsibility-icon"></div>
            <span>Responsabilidad social en nuestras operaciones</span>
          </div>
        </div>
      </section>
      
      <section className="about-us-testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Gracias a Hipotecas Online, pude comprar mi primera casa. El proceso fue rápido y sin complicaciones."</p>
            <h4>María G.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Excelente atención al cliente y las mejores tasas del mercado. ¡Totalmente recomendado!"</p>
            <h4>Carlos R.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Nunca pensé que obtener una hipoteca podría ser tan sencillo. Hipotecas Online hizo realidad nuestro sueño."</p>
            <h4>Ana y Juan P.</h4>
          </div>
        </div>
      </section>
      
      <section className="about-us-cta">
        <h2>¿Listo para dar el siguiente paso?</h2>
        <button className="cta-button">Solicita tu préstamo ahora</button>
      </section>
    </div>
  );
};

export default AboutUs;