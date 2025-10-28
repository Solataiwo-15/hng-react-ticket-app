import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (isMenuOpen) {
      mainContent.classList.add('blur-background');
    } else {
      mainContent.classList.remove('blur-background');
    }
  }, [isMenuOpen]); 

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
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