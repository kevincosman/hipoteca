import React from 'react';
import '../styles/whyUs.css';
import { Clock, Rocket, TrendingUp } from 'lucide-react';


const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="icon-wrapper">
      {icon}
    </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="learn-more">Cómo funciona</a>
    </div>
  );
};

export default FeatureCard;