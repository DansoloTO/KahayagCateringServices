import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Ensure your firebase path is correct
import { signOut } from 'firebase/auth'; // Import the sign-out method
import { 
  ShoppingBag, MessageSquare, Activity, 
  PlusCircle, Calendar, LogOut, User 
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState("Dan Vincent");

  const menuItems = [
    { name: 'Recent Order', icon: <ShoppingBag size={20} /> },
    { name: 'Chat', icon: <MessageSquare size={20} /> },
    { name: 'Activity', icon: <Activity size={20} /> },
    { name: 'Start Order', icon: <PlusCircle size={20} /> },
    { name: 'Calendar', icon: <Calendar size={20} /> },
  ];

  // CLEAN UP TIP: The Logout Function
  const handleLogout = async () => {
    try {
      // 1. Sign out from Firebase
      await signOut(auth);
      
      // 2. Redirect to landing page
      // Because App.jsx checks the location, the Top Nav will now show up again.
      navigate('/'); 
      
      console.log("Successfully logged out");
    } catch (error) {
      console.error("Error signing out: ", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-logo">Kahayag</h2>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button key={item.name} className="sidebar-link">
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
          
          {/* Clicking this triggers the Firebase logout */}
          <button className="sidebar-link logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="user-profile">
            <User size={24} />
            <span>{userName}</span>
          </div>
        </header>

        <section className="welcome-section">
          <div className="welcome-card">
            <h1 className="welcome-title">Welcome, {userName}!</h1>
            <p className="welcome-text">Ready to make your next event shine?</p>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="grid-card">
            <h3>Quick Status</h3>
            <p>No active orders at the moment.</p>
          </div>
          <div className="grid-card">
            <h3>Recent Activity</h3>
            <p>You viewed the Wedding Menu yesterday.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;