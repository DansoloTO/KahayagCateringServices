import './Logo.css';
import LogoImg from '../Images/KahayagLogo.png'; // adjust path

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src={LogoImg}
        alt="Kahayag Logo"
        className="logo-image"
      />
    </div>
  );
};

export default Logo;