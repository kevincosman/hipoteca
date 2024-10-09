import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/utils/scrollToTop.jsx';
import Header from './components/header.jsx';
import Home from './components/home.jsx'
import AboutUs from './components/aboutUs.jsx';
import Loans from './components/loans.jsx';
import Help from './components/help.jsx';
import Footer from './components/footer.jsx';
import ApplicationForm from './components/applicationForm.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/prestamos" element={<Loans />} />
        <Route path="/ayuda" element={<Help />} />
        <Route path="/formulario" element={<ApplicationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
