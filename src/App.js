import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/utils/scrollToTop.jsx';
import Header from './components/header.jsx';
import Home from './components/home.jsx'
import AboutUs from './components/aboutUs.jsx';
import Loans from './components/loans.jsx';
import FaqPage from './components/faqPage.jsx';
import Footer from './components/footer.jsx';
import ApplicationForm from './components/applicationForm.jsx';
import RealEstateForm from './components/realEstateForm.jsx';
import WhatsAppButton from './components/utils/whatsappButton.jsx';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/prestamos" element={<Loans />} />
        <Route path="/ayuda" element={<FaqPage />} />
        <Route path="/formulario" element={<ApplicationForm />} />
        <Route path="/inmobiliaria" element={<RealEstateForm />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
