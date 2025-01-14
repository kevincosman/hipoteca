import React from 'react';
import { MessageCircle } from 'lucide-react';
import '../../styles/whatsappButton.css';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5491122746026', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="whatsapp-icon" />
      <span className="whatsapp-text">
        Chateá con nosotros
      </span>
    </button>
  );
};

export default WhatsAppButton;