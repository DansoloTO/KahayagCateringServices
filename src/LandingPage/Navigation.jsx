import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { User } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = ['Home', 'Services', 'Menu', 'Gallery', 'Contacts'];
  const [activeItem, setActiveItem] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only track active sections on the home/landing page
      if (location.pathname === '/') {
        const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveItem(section.id.charAt(0).toUpperCase() + section.id.slice(1));
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const scrollToSection = (e, id) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Timeout allows the home page to load before scrolling
      setTimeout(() => {
        const element = document.getElementById(id.toLowerCase());
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      e.preventDefault();
      const element = document.getElementById(id.toLowerCase());
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveItem(id);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navigation-container">
        <div className="navigation-wrapper">
          <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <Logo isScrolled={isScrolled} />
          </div>
          <ul className="navigation-items">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item)}
                  className={`nav-item ${activeItem === item ? 'active' : ''}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="nav-button" onClick={() => navigate('/login')}>
            <User className="nav-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;