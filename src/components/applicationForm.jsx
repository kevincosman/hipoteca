import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Shield, Sparkles, FileCheck, Headphones, User } from 'lucide-react';
import '../styles/applicationForm.css';

const ApplicationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const calculatorData = location.state?.calculatorData || {};
  
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    documentType: 'dni',
    documentNumber: '',
    comments: ''
  });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const contentMessage = `
    Nombre y apellido: ${formData.firstName} ${formData.lastName}
    Email: ${formData.email}
    Teléfono: ${formData.phone}
    Tipo de documento: ${formData.documentType}
    Número de documento: ${formData.documentNumber}
    Monto del prestamo: ${calculatorData.loanAmount}
    Sistema: ${calculatorData.system === 'french' ? 'Francés' : 'Americano'}
    Plazo: ${calculatorData.numberOfPayments}
    Observaciones: ${formData.comments}`;

    try {
      await emailjs.send(
        'service_0om2gzc',
        'template_p7lafb3',
        {
          message: contentMessage,
          to_email: 'kevincosman97@gmail.com',
        },
        'nqkPBucguCdwpKN8M'
      );
      navigate('/success');
    } catch (error) {
      console.error(error);
      navigate('/error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`appFormContainer ${isVisible ? 'appFormVisible' : ''}`}>
      <div className="appFormContent">
        <h1 className="appFormTitle">Solicitud de Préstamo Hipotecario</h1>
        <p className="appFormSubtitle">Complete los siguientes datos para iniciar su solicitud</p>

        <form onSubmit={handleSubmit} className="appFormGrid">
          <div className="appFormCol">
            <div className="appFormGroup">
              <label>Nombre</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="appFormGroup">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="appFormGroup">
              <label>Tipo de documento</label>
              <select
                name="documentType"
                value={formData.documentType}
                onChange={handleChange}
                required
              >
                <option value="dni">DNI</option>
                <option value="passport">Pasaporte</option>
              </select>
            </div>
          </div>
          
          <div className="appFormCol">
            <div className="appFormGroup">
              <label>Apellido</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="appFormGroup">
              <label>Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="appFormGroup">
              <label>Número de documento</label>
              <input
                type="text"
                name="documentNumber"
                value={formData.documentNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="appFormFullWidth">
            <div className="appFormGroup">
              <label>Comentarios adicionales</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
                placeholder="Agregue cualquier información adicional que considere relevante"
              />
            </div>

            <button 
              type="submit" 
              className="appFormSubmit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
            </button>
          </div>
        </form>
      </div>

      <div className="appFormSidebar">
        <div className="appFormSidebarContent">
          <h2>Beneficios de nuestros préstamos</h2>
          
          <div className="appFormBenefits">
            {/*<div className="appFormBenefit">
              <div className="appFormBenefitIcon">
                <Clock size={24} />
              </div>
              <div className="appFormBenefitText">
                <h3>Respuesta rápida</h3>
                <p>Evaluación en 24-48hs</p>
              </div>
            </div>*/}

            <div className="appFormBenefit">
              <div className="appFormBenefitIcon">
                <Shield size={24} />
              </div>
              <div className="appFormBenefitText">
                <h3>Tasa garantizada</h3>
                <p>Sin variaciones durante el préstamo</p>
              </div>
            </div>

            <div className="appFormBenefit">
              <div className="appFormBenefitIcon">
                <Sparkles size={24} />
              </div>
              <div className="appFormBenefitText">
                <h3>Total transparencia</h3>
                <p>Sin gastos ocultos</p>
              </div>
            </div>

            <div className="appFormBenefit">
              <div className="appFormBenefitIcon">
                <FileCheck size={24} />
              </div>
              <div className="appFormBenefitText">
                <h3>Mínimos requisitos</h3>
                <p>Documentación simple y clara</p>
              </div>
            </div>

            <div className="appFormBenefit">
              <div className="appFormBenefitIcon">
                <Headphones size={24} />
              </div>
              <div className="appFormBenefitText">
                <h3>Atención personalizada</h3>
                <p>Asesoramiento continuo</p>
              </div>
            </div>
          </div>

          <div className="appFormTestimonial">
            <div className="appFormTestimonialHeader">
              <div className="appFormTestimonialAvatar">
                <User size={24} />
              </div>
              <div className="appFormTestimonialContent">
                <p>"El proceso fue muy simple y rápido. En una semana ya tenía mi préstamo aprobado."</p>
                <div className="appFormTestimonialAuthor">
                  <span>María G.</span>
                  <small>Cliente satisfecha</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;