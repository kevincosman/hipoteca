import React, { useState } from 'react';
import '../styles/faq.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué servicio online ofrece Hipotecas Online?",
      answer: "Hipotecas Online ofrece servicios de préstamos hipotecarios completamente en línea. Puedes calcular tu préstamo, solicitar y gestionar todo el proceso desde la comodidad de tu hogar."
    },
    {
      question: "¿Cómo solicitar un préstamo hipotecario en Hipotecas Online?",
      answer: "Para solicitar un préstamo, primero utiliza nuestra calculadora para determinar el monto y plazo que necesitas. Luego, haz clic en 'Solicitar préstamo' y sigue los pasos para completar tu solicitud en línea."
    },
    {
      question: "¿Cuánto dinero online puedo solicitar en Hipotecas Online?",
      answer: "El monto que puedes solicitar depende de varios factores, incluyendo el valor de la propiedad y tu capacidad de pago. Generalmente, ofrecemos préstamos de hasta el 80% del valor de tasación de la propiedad."
    },
    {
      question: "¿Cómo recibo el dinero de mis préstamos online con Hipotecas Online?",
      answer: "Una vez aprobado tu préstamo y completada la documentación necesaria, el dinero se transferirá directamente a la cuenta bancaria que nos proporciones durante el proceso de solicitud."
    }
  ];

  return (
    <div className="faq-container">
      <h2>Preguntas frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="faq-more">
        <p>¿Tenés más dudas? <a href="#">Ingresá acá</a></p>
      </div>
    </div>
  );
};

export default FAQ;