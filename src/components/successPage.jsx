// SuccessPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import '../styles/feedbackPages.css';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`feedback-container ${visible ? 'visible' : ''}`}>
      <div className="feedback-content">
        <div className="icon-container success">
          <CheckCircle size={64} />
        </div>
        <h1 className="feedback-title">¡Solicitud enviada con éxito!</h1>
        <p className="feedback-description">
          Gracias por confiar en nosotros. Nos pondremos en contacto contigo dentro de las próximas 24-48 horas hábiles.
        </p>
        <div className="button-container">
          <button 
            className="primary-button"
            onClick={() => navigate('/')}
          >
            <Home size={20} />
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;