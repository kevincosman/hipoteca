// FAQPage.jsx
import React, { useState, useRef } from 'react';
import '../styles/faqPage.css';
import { CreditCard, Wallet, FileText, Home } from 'lucide-react';

const ProductCard = ({ icon: Icon, title, onClick }) => (
  <div className="product-card" onClick={onClick}>
    <div className="product-icon">
      <Icon size={24} />
    </div>
    <p className="product-title">{title}</p>
  </div>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`}>
    <button className="faq-question" onClick={onClick}>
      <span className="question-text">{question}</span>
      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

const FAQSection = ({ title, questions, sectionRef }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="faq-section" ref={sectionRef}>
      <h2 className="section-title">{title}</h2>
      <div className="faq-list">
        {questions.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openQuestion === index}
            onClick={() => toggleQuestion(index)}
          />
        ))}
      </div>
    </div>
  );
};

const FAQPage = () => {
  const sectionRefs = {
    hipotecasOnline: useRef(null),
    tiposPrestamos: useRef(null),
    legales: useRef(null),
    soyInmobiliaria: useRef(null),
  };

  const sections = [
    {
      id: 'hipotecasOnline',
      title: 'Sobre Hipotecas Online',
      icon: CreditCard,
      ref: sectionRefs.hipotecasOnline,
      questions: [
        {
          question: '¿Qué servicio online ofrece Hipotecas Online?',
          answer: 'Hipotecas Online te permite iniciar tu solicitud de préstamo hipotecario de forma digital. Podés calcular tu préstamo, comenzar el proceso en línea y contar con el acompañamiento personalizado de un asesor durante todo el proceso.'
        },
        {
          question: '¿Por qué elegir Hipotecas Online?',
          answer: 'Ofrecemos tasas competitivas, atención personalizada sin procedimientos burocráticos, resolución rápida (una semana desde que se cumplen los requisitos), y la tranquilidad de una tasa fija. Además, brindamos asesoramiento comercial, legal y notarial permanente sin cargo.'
        },
        {
          question: '¿Cuánto tiempo demora el proceso completo?',
          answer: 'El tiempo de resolución de la operación es de una semana desde que se cumplen los requisitos para su evaluación. Una vez aprobado el crédito, la escrituración demora entre 5-10 días hábiles en CABA y 15-25 días hábiles en Provincia de Buenos Aires.'
        },
        {
          question: '¿Cómo comienza el proceso?',
          answer: 'El proceso inicia con una evaluación online donde analizamos tu situación crediticia. Luego realizamos una tasación del inmueble y evaluación de títulos. Una vez aprobado, procedemos con la escritura del préstamo hipotecario.'
        }
      ]
    },
    {
      id: 'tiposPrestamos',
      title: 'Tipos de Préstamos',
      icon: Wallet,
      ref: sectionRefs.tiposPrestamos,
      questions: [
        {
          question: '¿Qué tipos de préstamos ofrecen?',
          answer: 'Ofrecemos dos tipos principales de préstamos: Sistema Francés (hasta 5 años de plazo) y Sistema Americano (hasta 2 años de plazo). Ambos sistemas tienen tasas fijas entre 13% y 16% anual en dólares.'
        },
        {
          question: '¿Cuál es la diferencia entre el Sistema Francés y el Americano?',
          answer: 'El Sistema Francés permite plazos de hasta 5 años y financiamiento de hasta 40% del valor de tasación, con cuotas fijas que incluyen capital e interés. El Sistema Americano ofrece plazos de hasta 2 años y financiamiento de hasta 35% del valor de tasación.'
        },
        {
          question: '¿Cuánto me pueden prestar?',
          answer: 'Dependiendo del sistema elegido, podemos financiar hasta un 40% del valor de tasación en el Sistema Francés y hasta un 35% en el Sistema Americano.'
        },
        {
          question: '¿Puedo cancelar anticipadamente el préstamo?',
          answer: 'Sí, ofrecemos la posibilidad de precancelar total o parcialmente en cualquier momento, sin penalidad. Esta flexibilidad te permite reducir intereses y adaptar el préstamo a tus necesidades.'
        }
      ]
    },
    {
      id: 'legales',
      title: 'Legales',
      icon: FileText,
      ref: sectionRefs.legales,
      questions: [
        {
          question: '¿Qué documentación necesito para solicitar el préstamo?',
          answer: 'Necesitarás presentar documentación personal (DNI), comprobantes de ingresos, documentación del inmueble a hipotecar y sus títulos de propiedad. El detalle específico se proporcionará durante la evaluación inicial.'
        },
        {
          question: '¿Cómo es el proceso de escrituración?',
          answer: 'El proceso de escrituración se realiza con escribanos de reconocida solvencia moral y profesional. Se encarga de verificar la validez de los títulos y realizar la escritura de préstamo con garantía hipotecaria, asegurando la seguridad jurídica de la operación.'
        },
        {
          question: '¿Es legal contratar en dólares?',
          answer: 'Sí, la contratación en moneda extranjera está amparada por la ley 23.928 que modificó los artículos 617, 619 y 623 del Código Civil, permitiendo la libre contratación en moneda extranjera.'
        },
        {
          question: '¿Qué garantías tengo como cliente?',
          answer: 'Como cliente, tenés la seguridad de una operación respaldada por profesionales calificados, contratos hipotecarios elaborados con alta experiencia legal, y una empresa regulada que garantiza el respeto y la equidad en las relaciones entre las partes.'
        }
      ]
    },
    {
      id: 'soyInmobiliaria',
      title: 'Soy Inmobiliaria',
      icon: Home,
      ref: sectionRefs.soyInmobiliaria,
      questions: [
        {
          question: '¿Cómo puedo trabajar con Hipotecas Online?',
          answer: 'Las inmobiliarias pueden asociarse con nosotros para ofrecer soluciones financieras a sus clientes. Brindamos soporte especializado y herramientas para facilitar las operaciones inmobiliarias.'
        },
        {
          question: '¿Qué beneficios obtengo como inmobiliaria?',
          answer: 'Al trabajar con nosotros, obtenés un canal directo de financiación para tus clientes, apoyo en la gestión de las operaciones, y la tranquilidad de trabajar con una empresa especializada en créditos hipotecarios.'
        },
        {
          question: '¿Cómo es el proceso de tasación para las propiedades?',
          answer: 'Realizamos tasaciones profesionales y confiables de los inmuebles. Nuestro equipo evalúa cada propiedad considerando su ubicación, estado y características particulares para determinar su valor real de mercado.'
        },
        {
          question: '¿Qué tipo de soporte brindan a las inmobiliarias?',
          answer: 'Ofrecemos asesoramiento continuo, capacitación sobre nuestros productos, atención personalizada para cada operación y seguimiento detallado de las solicitudes de tus clientes.'
        }
      ]
    }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>¿Sobre qué temas tenés dudas?</h1>
        <div className="product-cards">
          {sections.map((section) => (
            <ProductCard
              key={section.id}
              icon={section.icon}
              title={section.title}
              onClick={() => scrollToSection(section.ref)}
            />
          ))}
        </div>
      </div>
      <div className="faq-content">
        {sections.map((section) => (
          <FAQSection
            key={section.id}
            title={section.title}
            questions={section.questions}
            sectionRef={section.ref}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;