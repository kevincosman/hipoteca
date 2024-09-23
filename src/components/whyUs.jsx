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
      title: "Préstamos de hasta $5000",
      description: "Flexibilidad en los montos de préstamos para adaptarnos a tus necesidades, con opciones de hasta $5000."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "La mejor TEA disponible",
      description: "Te garantizamos la Tasa Efectiva Anual más baja posible, maximizando tus ahorros a largo plazo."
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