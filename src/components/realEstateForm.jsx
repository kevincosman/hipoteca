import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Building2, Users, Wallet } from 'lucide-react';
import '../styles/realEstateForm.css';

const RealEstateForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();    
    setIsSubmitting(true);
    const contentMessage = `
    Inmobiliaria: ${formData.companyName}
    Nombre y apellido del contacto: ${formData.contactName}
    Email: ${formData.email}
    Teléfono: ${formData.phone}
    Direccion: ${formData.address}
    Ciudad: ${formData.city}
    Observaciones: ${formData.message}`;

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_kcxjaxg',
        'template_v5734ip',
        {
          message: contentMessage,
        },
        'FMigd1rBuxkv3LJ-j'
      );
      navigate('/success');
    } catch (error) {
      navigate('/error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`estateForm-container ${isVisible ? 'visible' : ''}`}>
      <section className="estateForm-hero">
        <div className="estateForm-hero-content">
          <h1>Programa de Partners Inmobiliarios</h1>
          <p>Potenciá tu negocio inmobiliario con soluciones hipotecarias personalizadas</p>
        </div>
      </section>

      <section className="estateForm-benefits">
        <div className="estateForm-benefits-grid">
          <div className="estateForm-benefit-card">
            <Wallet className="estateForm-benefit-icon" />
            <h3>Comisiones Competitivas</h3>
            <p>Hasta 2% por operación concretada</p>
          </div>
          <div className="estateForm-benefit-card">
            <Building2 className="estateForm-benefit-icon" />
            <h3>Costos transparentes</h3>
            <p>Tasa fija durante todo el préstamo</p>
          </div>
          <div className="estateForm-benefit-card">
            <Users className="estateForm-benefit-icon" />
            <h3>Soporte Premium</h3>
            <p>Atención personalizada 24/7</p>
          </div>
        </div>
      </section>

      <section className="estateForm-form-section">
        <div className="estateForm-form-container">
          <div className="estateForm-form-header">
            <h2>Completá tus datos</h2>
            <p>Unite a nuestra red de partners y expandí tu negocio</p>
          </div>     

          <form onSubmit={handleSubmit} className="estateForm-form">
            <div className="estateForm-form-grid">
              <div className="estateForm-form-group">
                <label htmlFor="companyName">Nombre de la inmobiliaria *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej: Inmobiliaria Ejemplo"
                  className="estateForm-input"
                />
              </div>

              <div className="estateForm-form-group">
                <label htmlFor="contactName">Nombre del contacto *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  placeholder="Nombre y apellido"
                  className="estateForm-input"
                />
              </div>

              <div className="estateForm-form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="ejemplo@mail.com"
                  className="estateForm-input"
                />
              </div>

              <div className="estateForm-form-group">
                <label htmlFor="phone">Teléfono *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+54 11 1234-5678"
                  className="estateForm-input"
                />
              </div>

              <div className="estateForm-form-group">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Calle, número, piso, depto"
                  className="estateForm-input"
                />
              </div>

              <div className="estateForm-form-group">
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Ciudad"
                  className="estateForm-input"
                />
              </div>
            </div>

            <div className="estateForm-form-group full-width">
              <label htmlFor="message">Mensaje adicional</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Cuéntanos más sobre tu inmobiliaria..."
                className="estateForm-textarea"
              />
            </div>

            <button 
              type="submit" 
              className="estateForm-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
            </button>

            <p className="estateForm-disclaimer">
              Al enviar este formulario, aceptás que nos comuniquemos contigo para brindarte más información sobre nuestro programa de partners.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RealEstateForm;