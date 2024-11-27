// ErrorPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle, ArrowLeft, Home } from 'lucide-react';
import '../styles/feedbackPages.css';

const ErrorPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`feedback-container ${visible ? 'visible' : ''}`}>
      <div className="feedback-content">
        <div className="icon-container error">
          <XCircle size={64} />
        </div>
        <h1 className="feedback-title">¡Ups! Algo salió mal</h1>
        <p className="feedback-description">
          Lo sentimos, hubo un error al procesar tu solicitud. Por favor, intenta nuevamente o contáctanos directamente.
        </p>
        <div className="button-container">
          <button 
            className="primary-button"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
            Intentar nuevamente
          </button>
          <button 
            className="secondary-button"
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

export default ErrorPage;