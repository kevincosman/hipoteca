import React, { useState, useEffect } from 'react';

const LoanCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [loanAmount, setLoanAmount] = useState(40000);
  const [interestRateAmerican] = useState(13);
  const [interestRateFrench] = useState(13);

  const [americanSystem, setAmericanSystem] = useState({ monthlyPayment: 0, totalPayment: 0 });
  const [frenchSystem, setFrenchSystem] = useState({ monthlyPayment: 0, totalPayment: 0 });

  useEffect(() => {
    const maxLoanAmount = propertyValue * 0.4;
    setLoanAmount(prevAmount => Math.min(prevAmount, maxLoanAmount));
  }, [propertyValue]);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, loanTerm, interestRateAmerican, interestRateFrench]);

  const calculateLoan = () => {
    // American System (interest-only payments + principal at end)
    const monthlyInterestAmerican = (loanAmount * interestRateAmerican) / 100 / 12;
    const americanMonthlyPayment = monthlyInterestAmerican;
    const americanTotalPayment = (monthlyInterestAmerican * loanTerm) + loanAmount;

    // French System (equal payments)
    const r = interestRateFrench / 100 / 12;
    const frenchMonthlyPayment = (loanAmount * r * Math.pow(1 + r, loanTerm)) / (Math.pow(1 + r, loanTerm) - 1);
    const frenchTotalPayment = frenchMonthlyPayment * loanTerm;

    setAmericanSystem({
      monthlyPayment: americanMonthlyPayment.toFixed(2),
      totalPayment: americanTotalPayment.toFixed(2)
    });
    setFrenchSystem({
      monthlyPayment: frenchMonthlyPayment.toFixed(2),
      totalPayment: frenchTotalPayment.toFixed(2)
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (
    <div className="loan-calculator">
      <h2>Calculadora de Préstamos Hipotecarios</h2>
      <div className="calculator-grid">
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="property-value">Valor del inmueble</label>
            <input
              id="property-value"
              type="number"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
            />
            <span className="currency">USD</span>
          </div>
          <div className="input-group">
            <label htmlFor="loan-amount">Monto del préstamo (máx 40%)</label>
            <input
              id="loan-amount"
              type="number"
              value={loanAmount}
              max={propertyValue * 0.4}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
            <span className="currency">USD</span>
          </div>
          <div className="input-group">
            <label htmlFor="loan-term">Plazo (meses)</label>
            <select
              id="loan-term"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
            >
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
              <option value="36">36 meses</option>
              <option value="48">48 meses</option>
              <option value="60">60 meses</option>
            </select>
          </div>
        </div>
        <div className="results-section">
          <div className="result-card american">
            <h3>Sistema Americano</h3>
            <p>Tasa de interés: <span>{interestRateAmerican}%</span></p>
            <p>Pago mensual: <span>{formatCurrency(americanSystem.monthlyPayment)}</span></p>
            <p>Pago total: <span>{formatCurrency(americanSystem.totalPayment)}</span></p>
          </div>
          <div className="result-card french">
            <h3>Sistema Francés</h3>
            <p>Tasa de interés: <span>{interestRateFrench}%</span></p>
            <p>Pago mensual: <span>{formatCurrency(frenchSystem.monthlyPayment)}</span></p>
            <p>Pago total: <span>{formatCurrency(frenchSystem.totalPayment)}</span></p>
          </div>
        </div>
      </div>
      <div className="button-group">
        <button className="primary">Solicitar Préstamo</button>
        <button className="secondary">Consultar con Asesor</button>
      </div>
    </div>
  );
};

export default LoanCalculator;