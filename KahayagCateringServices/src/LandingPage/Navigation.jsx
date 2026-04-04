import Logo from './Logo';
import { User } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const navItems = ['Home', 'Menu', 'Services', 'Gallery', 'Contacts'];

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-wrapper">
          <Logo />

          <ul className="navigation-items">
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-item ${index === 0 ? 'active' : ''}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button className="nav-button">
            <User className="nav-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;