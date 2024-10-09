import React from 'react';
import FeatureCard from './featureCard';
import { Clock, Rocket, TrendingUp } from 'lucide-react';
import '../styles/whyUs.css';

const whyUs = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: "Tasas de interés justas",
      description: "Ofrecemos tasas competitivas adaptadas a tu situación financiera, asegurando que obtengas el mejor trato posible."
    },
    {
      icon: <Rocket size={24} />,
      title: "Soluciones flexibles para cada tipo de préstamo",
      description: "Ofrecemos opciones claras y accesibles para que elijas el préstamo que mejor se ajuste a tus necesidades."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Tasas competitivas y transparentes",
      description: "Nuestras tasas están diseñadas para ofrecerte una solución financiera eficiente y confiable."
    }
  ];

  return (
    <section className="why-choose-us">
      <h2>¿Por qué elegirnos?</h2>
      <p className="subtitle">Ofrecemos un servicio integral de prestatario</p>
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default whyUs;