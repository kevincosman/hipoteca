import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header.jsx';
import Home from './components/home.jsx'
import Us from './components/usx.jsx';
import Loans from './components/loans.jsx';
import Contact from './components/contact.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nosotros" element={<Us />} />
        <Route path="/prestamos" element={<Loans />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
