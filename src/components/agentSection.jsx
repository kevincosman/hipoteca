import React from 'react';
import { ShieldCheck, Clock, Users } from 'lucide-react';
import '../styles/agentSection.css';

const AgentSection = () => {

  const handleClickWhatsapp = () => {
    window.open('https://wa.me/5491112345678', '_blank');
  };

  return (
    <section className="agent-section">
      <div className="agent-content">
        <div className="agent-grid">
          <h2>Somos Agentes de Créditos Especializados</h2>
          <p className="subtitle">Como expertos en el mercado hipotecario, te ofrecemos:</p>
          
          <div className="features-grid">
            <div className="feature">
              <ShieldCheck strokeWidth={1.5} />
              <p>Asesoramiento personalizado y seguro</p>
            </div>
            
            <div className="feature">
              <Users strokeWidth={1.5} />
              <p>Atención integral durante todo el proceso</p>
            </div>
            
            <div className="feature">
              <Clock strokeWidth={1.5} />
              <p>Proceso ágil y eficiente</p>
            </div>
          </div>

          <button className="contact-btn" onClick={handleClickWhatsapp} >Consultá con un agente</button>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;