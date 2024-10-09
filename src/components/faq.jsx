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
      answer: "Hipotecas Online te permite iniciar tu solicitud de préstamo de forma digital. Podés calcular tu préstamo y comenzar el proceso en línea, para luego continuar con el acompañamiento personalizado de un asesor."
    },
    {
      question: "¿Cómo solicitar un préstamo hipotecario en Hipotecas Online?",
      answer: "Para solicitar un préstamo, primero utiliza nuestra calculadora para determinar el monto y plazo que necesitas. Luego, haz clic en 'Solicitar préstamo' y sigue los pasos para completar tu solicitud en línea."
    },
    {
      question: "¿Cuánto dinero online puedo solicitar en Hipotecas Online?",
      answer: "El monto que puedes solicitar depende de varios factores, incluyendo el valor de la propiedad y tu capacidad de pago. Generalmente, ofrecemos préstamos de hasta el 40% del valor de tasación de la propiedad."
    },
    {
      question: "¿Cómo sigue el proceso una vez que solicito un préstamo en Hipotecas Online?",
      answer: "Después de iniciar la solicitud online, un asesor se pondrá en contacto con vos para guiarte en los próximos pasos y completar el proceso."
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