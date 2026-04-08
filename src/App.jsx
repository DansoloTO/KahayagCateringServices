import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './LandingPage/Navigation';
import Hero from './LandingPage/Hero';
import Services from './LandingPage/Services';
import Menu from './LandingPage/Menu';
import Login from './Auth/Login';
import Register from './Auth/Register';
import './App.css';

// Main Landing Page Component
const LandingPage = () => (
  <>
    <section id="home"><Hero /></section>
    <section id="services" className="content-section">
      <h2 className="section-title">Services</h2>
      <Services />
    </section>
    <section id="menu" className="content-section">
      <h2 className="section-title">Menu</h2>
      <Menu />
    </section>
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation MUST be inside Router to use useNavigate/Link */}
        <Navigation /> 
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;