import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './LandingPage/Navigation';
import Hero from './LandingPage/Hero';
import Services from './LandingPage/Services';
import Menu from './LandingPage/Menu';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Dashboard from './Dashboard/Dashboard';
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

// Wrapper to handle dynamic layout logic
const AppContent = () => {
  const location = useLocation();

  // Paths where the top landing-page navigation is hidden
  const hideNavPaths = ['/dashboard', '/login', '/register'];
  const shouldHideNav = hideNavPaths.includes(location.pathname);

  return (
    /* Dynamic class 'no-nav-padding' removes the dead space on the dashboard */
    <div className={`app-container ${shouldHideNav ? 'no-nav-padding' : ''}`}>
      
      {!shouldHideNav && <Navigation />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;