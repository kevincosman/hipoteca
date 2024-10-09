import React, { useState, useEffect } from 'react';
import '../styles/applicationForm.css';

const ApplicationForm = ({ calculatorData }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    description: '',
    loanAmount: calculatorData?.loanAmount || '',
    numberOfPayments: calculatorData?.numberOfPayments || '',
    system: calculatorData?.system || 'french'
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className={`application-container ${isVisible ? 'visible' : ''}`}>
      <div className="application-content">
        <h1 className="form-title">Solicitud de Préstamo</h1>
        <p className="form-subtitle">Estás a un paso de hacer realidad tus proyectos. Completa el formulario y nos pondremos en contacto contigo pronto.</p>
        
        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-columns">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dni">DNI</label>
                <input
                  type="text"
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="loanAmount">Monto del préstamo</label>
                <input
                  type="number"
                  id="loanAmount"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="numberOfPayments">Cantidad de cuotas</label>
                <input
                  type="number"
                  id="numberOfPayments"
                  name="numberOfPayments"
                  value={formData.numberOfPayments}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="system">Sistema</label>
                <select
                  id="system"
                  name="system"
                  value={formData.system}
                  onChange={handleInputChange}
                  required
                >
                  <option value="french">Francés</option>
                  <option value="american">Americano</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="description">Descripción (opcional)</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="submit-button">Enviar Solicitud</button>
        </form>
      </div>
      <div className="application-sidebar">
        <h2>¿Por qué elegirnos?</h2>
        <ul className="benefits-list">
          <li className="benefit-item">
            <span className="benefit-icon">🚀</span>
            <span>Proceso rápido y sencillo</span>
          </li>
          <li className="benefit-item">
            <span className="benefit-icon">💰</span>
            <span>Tasas competitivas</span>
          </li>
          <li className="benefit-item">
            <span className="benefit-icon">👥</span>
            <span>Asesoramiento personalizado</span>
          </li>
          <li className="benefit-item">
            <span className="benefit-icon">⏱️</span>
            <span>Flexibilidad en los plazos</span>
          </li>
        </ul>
        <div className="testimonial">
          <p>"Gracias a este préstamo, pude expandir mi negocio. El proceso fue muy fácil y el equipo siempre estuvo dispuesto a ayudar."</p>
          <p className="testimonial-author">- María G.</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;