import './Menu.css';

const Menu = () => {
  const menuCategories = [
    {
      category: "Cebuano Classics",
      items: [
        { name: "Lechon de Cebu", desc: "Golden-brown, crunchy skin with aromatic herbs." },
        { name: "Puso (Hanging Rice)", desc: "Traditional rice wrapped in coconut leaves." }
      ]
    },
    {
      category: "Filipino Favorites",
      items: [
        { name: "Adobo sa Asin", desc: "Classic pork braised in vinegar and garlic." },
        { name: "Sinigang na Hipon", desc: "Sour tamarind soup with fresh local shrimp." }
      ]
    }
  ];

  return (
    <div className="menu-container">
      <div className="menu-grid">
        {menuCategories.map((cat, i) => (
          <div key={i} className="menu-category">
            <h3 className="category-title">{cat.category}</h3>
            {cat.items.map((item, j) => (
              <div key={j} className="menu-item">
                <div className="item-header">
                  <span className="item-name">{item.name}</span>
                  <span className="item-dots"></span>
                </div>
                <p className="item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="custom-request-box">
        <h4>Custom Menu Requests</h4>
        <p>Your Vision, Our Masterpiece. We specialize in Filipino cuisine and can customize any dish to your specific preferences.</p>
        <button className="request-btn">Request Custom Menu</button>
      </div>
    </div>
  );
};

export default Menu;