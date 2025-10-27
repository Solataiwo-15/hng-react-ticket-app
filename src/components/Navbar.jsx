import React, { useState, useEffect } from 'react'; // Import useEffect
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This is the new logic
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (isMenuOpen) {
      // When menu is open, add blur class to main content
      mainContent.classList.add('blur-background');
    } else {
      // When menu is closed, remove the blur class
      mainContent.classList.remove('blur-background');
    }
  }, [isMenuOpen]); // This effect runs whenever isMenuOpen changes

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // We no longer need the overlay div or the Fragment
    <header className="main-header">
      <div className="container">
        <nav className="main-nav">
          <Link to="/" className="nav-logo" onClick={closeMenu}>TicketApp</Link>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/auth/login" className="btn btn-text" onClick={closeMenu}>Login</Link></li>
            <li><Link to="/auth/signup" className="btn btn-primary" onClick={closeMenu}>Get Started</Link></li>
          </ul>

          <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;