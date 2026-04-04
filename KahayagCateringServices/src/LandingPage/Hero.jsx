import './Hero.css';
import LandingImg from '../Images/Landingpagekahayag21.jpg'; // <-- FIXED

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src={LandingImg}       // <-- FIXED
          alt="Elegant outdoor dining setup"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-card">
          <h1 className="hero-title">Kahayag Catering Services</h1>
          <p className="hero-subtitle">Your Vision. Our Masterpiece</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;