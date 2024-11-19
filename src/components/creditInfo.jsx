// CreditInfo.jsx
import React from 'react';
import { 
  Building2, 
  BarChart3, 
  PiggyBank,
  Clock
} from 'lucide-react';
import '../styles/creditInfo.css';

const CreditInfo = () => {
  return (
    <section className="credit-info">
      <div className="credit-info-container">
        <div className="credit-info-header">
          <h2>Sistemas de Crédito Hipotecario</h2>
          <p>Conocé nuestras opciones y elegí la que mejor se adapte a tu situación financiera</p>
        </div>

        <div className="credit-systems">
          <div className="credit-card system-french" data-aos="fade-up">
            <div className="credit-card-icon">
              <Building2 size={32} />
            </div>
            <h3>Sistema Francés</h3>
            <p className="credit-card-description">
              Cuotas fijas durante todo el préstamo. El capital amortizado aumenta con cada cuota, mientras que los intereses disminuyen.
            </p>
            <ul className="credit-features">
              <li>
                <BarChart3 size={20} />
                <span>Cuotas fijas y predecibles</span>
              </li>
              <li>
                <PiggyBank size={20} />
                <span>Mayor amortización al final del préstamo</span>
              </li>
              <li>
                <Clock size={20} />
                <span>Ideal para planificación a largo plazo</span>
              </li>
            </ul>
          </div>

          <div className="credit-card system-american" data-aos="fade-up" data-aos-delay="100">
            <div className="credit-card-icon">
              <Building2 size={32} />
            </div>
            <h3>Sistema Americano</h3>
            <p className="credit-card-description">
              Pagás solo los intereses mensualmente. El capital se devuelve en su totalidad al final del plazo del préstamo.
            </p>
            <ul className="credit-features">
              <li>
                <BarChart3 size={20} />
                <span>Cuotas mensuales más bajas</span>
              </li>
              <li>
                <PiggyBank size={20} />
                <span>Flexibilidad para inversiones paralelas</span>
              </li>
              <li>
                <Clock size={20} />
                <span>Ideal para expectativas de ingresos futuros mayores</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditInfo;