import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Weddings",
      description: "Full-service planning and day-of coordination for exclusive Cebu venues.",
      icon: "💍"
    },
    {
      title: "Corporate Events",
      description: "Professional management for product launches, galas, and team-building.",
      icon: "🏢"
    },
    {
      title: "Private Gatherings",
      description: "Creative planning for milestones like debuts and themed parties.",
      icon: "🎉"
    },
    {
      title: "Sustainable Events",
      description: "Eco-friendly planning using local materials and waste-minimization.",
      icon: "🌿"
    }
  ];

  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <span className="service-icon">{service.icon}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;