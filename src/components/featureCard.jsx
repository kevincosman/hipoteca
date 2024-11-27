import React from 'react';
import '../styles/whyUs.css';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="icon-wrapper">
      {icon}
    </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/prestamos" className="learn-more">Cómo funciona</a>
    </div>
  );
};

export default FeatureCard;