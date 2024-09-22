import React, { useState } from 'react';
import '../styles/loanCalculator.css';

const LoanCalculator = () => {
  const [propertyValue, setPropertyValue] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [results, setResults] = useState(null);

  const calculateLoan = (e) => {
    e.preventDefault();
    const interestRate = 0.15; // 15% anual, ajusta según sea necesario

    // Cálculo del sistema americano
    const monthlyInterestAmerican = (loanAmount * interestRate) / 12;
    const monthlyPaymentAmerican = monthlyInterestAmerican;
    const totalPaymentAmerican = monthlyPaymentAmerican * (loanTerm * 12) + parseFloat(loanAmount);

    // Cálculo del sistema francés
    const monthlyInterestFrench = interestRate / 12;
    const monthlyPaymentFrench = 
      (loanAmount * monthlyInterestFrench * Math.pow(1 + monthlyInterestFrench, loanTerm * 12)) / 
      (Math.pow(1 + monthlyInterestFrench, loanTerm * 12) - 1);
    const totalPaymentFrench = monthlyPaymentFrench * (loanTerm * 12);

    setResults({
      american: {
        monthlyPayment: monthlyPaymentAmerican.toFixed(2),
        totalPayment: totalPaymentAmerican.toFixed(2)
      },
      french: {
        monthlyPayment: monthlyPaymentFrench.toFixed(2),
        totalPayment: totalPaymentFrench.toFixed(2)
      },
      interestRate: (interestRate * 100).toFixed(2),
      term: loanTerm * 12
    });
  };

  return (
    <section className="sectionLoanCalculator">
      <div className="loan-calculator">
        <h2>Calculadora de Préstamos</h2>
        <form onSubmit={calculateLoan}>
          <div className="form-group">
            <label htmlFor="property-value">Valor del inmueble actual ($):</label>
            <input
              id="property-value"
              type="number"
              value={propertyValue}
              onChange={(e) => setPropertyValue(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="loan-amount">Monto del préstamo a solicitar ($):</label>
            <input
              id="loan-amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="loan-term">Plazo del préstamo (años):</label>
            <input
              id="loan-term"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="calculate-button">Calcular</button>
        </form>
        {results && (
          <div className="results">
            <h3>Resultados del cálculo:</h3>
            <div className="result-system">
              <h4>Sistema Americano:</h4>
              <p>{results.term} cuotas de ${results.american.monthlyPayment}</p>
              <p>Pago total: ${results.american.totalPayment}</p>
            </div>
            <div className="result-system">
              <h4>Sistema Francés:</h4>
              <p>{results.term} cuotas de ${results.french.monthlyPayment}</p>
              <p>Pago total: ${results.french.totalPayment}</p>
            </div>
            <p>Tasa de interés: {results.interestRate}%</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoanCalculator;