import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/loanCalculator.css';

const LoanCalculator = () => {
  const [activeSystem, setActiveSystem] = useState('french');
  const [propertyValue, setPropertyValue] = useState(100000);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [numberOfPayments, setNumberOfPayments] = useState(24);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const interestRate = 18; // Tasa fija del 18%

  const navigate = useNavigate();

  useEffect(() => {
    calculateLoan();
  // eslint-disable-next-line
  }, [loanAmount, numberOfPayments, activeSystem]);

  useEffect(() => {
    const maxLoanAmount = propertyValue * 0.5; // 50% del valor
    setLoanAmount(prevAmount => Math.min(prevAmount, maxLoanAmount));
  }, [propertyValue]);

  const calculateLoan = () => {
    const r = interestRate / 100 / 12; // Tasa mensual
    let payment;

    if (activeSystem === 'french') {
      // Sistema Francés: cuota fija que incluye capital e intereses
      payment = (loanAmount * r * Math.pow(1 + r, numberOfPayments)) / (Math.pow(1 + r, numberOfPayments) - 1);
    } else {
      // Sistema Americano: solo intereses mensuales
      payment = loanAmount * r;
    }

    setMonthlyPayment(payment);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const handleInputChange = (setter, min, max) => (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    if (value === '') {
      setter(min);
    } else {
      const numValue = Number(value);
      setter(Math.max(min, Math.min(max, numValue)));
    }
  };

  const handlePropertyValueChange = (increment) => {
    setPropertyValue(prev => Math.max(50000, prev + increment));
  };

  const handleNumberOfPaymentsChange = (increment) => {
    const maxPayments = activeSystem === 'french' ? 60 : 24;
    setNumberOfPayments(prev => Math.max(12, Math.min(maxPayments, prev + increment)));
  };

  const getNextPaymentDate = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toLocaleString('es-AR', { month: 'long', day: 'numeric' });
  };

  const handleSubmit = () => {
    const calculatorData = {
      loanAmount,
      numberOfPayments,
      system: activeSystem,
      monthlyPayment,
      interestRate
    };
    navigate('/formulario', { state: { calculatorData } });
  };

  useEffect(() => {
    const maxPayments = activeSystem === 'french' ? 60 : 24;
    if (numberOfPayments > maxPayments) {
      setNumberOfPayments(maxPayments);
    }
  // eslint-disable-next-line
  }, [activeSystem]);

  return (
    <div className="loan-calculator">
      <h2 className="calculator-title">Calculá tu préstamo hipotecario</h2>
      
      <div className="system-tabs">
        <button 
          className={`tab-button ${activeSystem === 'french' ? 'active' : ''}`}
          onClick={() => setActiveSystem('french')}
        >
          Sistema Francés
        </button>
        <button 
          className={`tab-button ${activeSystem === 'american' ? 'active' : ''}`}
          onClick={() => setActiveSystem('american')}
        >
          Sistema Americano
        </button>
      </div>

      <div className="input-group">
        <label>Valor del inmueble</label>
        <div className="input-with-buttons">
          <button onClick={() => handlePropertyValueChange(-5000)}>-</button>
          <input
            type="text"
            value={formatCurrency(propertyValue)}
            onChange={handleInputChange(setPropertyValue, 50000, 10000000)}
          />
          <button onClick={() => handlePropertyValueChange(5000)}>+</button>
        </div>
      </div>

      <div className="input-group">
        <label>Cantidad de cuotas {activeSystem === 'french' ? '(máx. 60)' : '(máx. 24)'}</label>
        <div className="input-with-buttons">
          <button onClick={() => handleNumberOfPaymentsChange(-1)}>-</button>
          <input
            type="text"
            value={numberOfPayments}
            onChange={handleInputChange(setNumberOfPayments, 12, activeSystem === 'french' ? 60 : 24)}
          />
          <button onClick={() => handleNumberOfPaymentsChange(1)}>+</button>
        </div>
      </div>

      <div className="loan-amount-container">
        <label>Monto del préstamo (máx. 50% del valor del inmueble)</label>
        <div className="loan-amount">{formatCurrency(loanAmount)}</div>
        <input
          type="range"
          min="10000"
          max={propertyValue * 0.5}
          step="1000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="slider"
        />
        <p className="slider-caption">Monto máximo: {formatCurrency(propertyValue * 0.5)}</p>
      </div>

      <div className="loan-details">
        <div className="detail-item">
          <span className="detail-label">Sistema:</span>
          <span className="detail-value">
            {activeSystem === 'french' ? 'Francés (capital + intereses)' : 'Americano (solo intereses + capital al final)'}
          </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Tasa de interés anual:</span>
          <span className="detail-value">{interestRate}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">
            {activeSystem === 'french' ? 'Cuota mensual (capital + intereses):' : 'Cuota mensual (solo intereses):'}
          </span>
          <span className="detail-value">{formatCurrency(monthlyPayment)}</span>
        </div>
        {activeSystem === 'american' && (
          <div className="detail-item">
            <span className="detail-label">Pago final (capital):</span>
            <span className="detail-value">{formatCurrency(loanAmount)}</span>
          </div>
        )}
        <div className="detail-item">
          <span className="detail-label">Primer vencimiento:</span>
          <span className="detail-value">{getNextPaymentDate()}</span>
        </div>
      </div>
      
      <button className="action-button" onClick={handleSubmit}>Solicitá tu préstamo hoy</button>
      <p className="disclaimer">* Sujeto a aprobación crediticia</p>
    </div>
  );
};

export default LoanCalculator;