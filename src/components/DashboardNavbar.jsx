import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) { 
      if (isMenuOpen) {
        mainContent.classList.add('blur-background');
      } else {
        mainContent.classList.remove('blur-background');
      }
    }
  }, [isMenuOpen]);

  const sessionData = JSON.parse(localStorage.getItem('ticketapp_session'));
  const userName = sessionData?.user?.name || 'User';

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('ticketapp_session');
    closeMenu();
    navigate('/');
  };

  return (
    <header className="main-header">
      <div className="container">
        <nav className="main-nav">
          <Link to="/dashboard" className="nav-logo" onClick={closeMenu}>TicketApp</Link>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><span className="nav-user">Welcome, {userName}!</span></li>
            <li><Link to="/tickets" className="btn btn-text" onClick={closeMenu}>Manage Tickets</Link></li>
            <li><button onClick={handleLogout} className="btn btn-primary">Logout</button></li>
          </ul>
          
          <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default DashboardNavbar;