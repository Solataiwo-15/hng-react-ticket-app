import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="decorative-circle circle-1"></div>
          <div className="decorative-circle circle-2"></div>
          <div className="decorative-circle circle-3"></div>
          <div className="decorative-circle circle-4"></div>
          
          <div className="container hero-content">
            <div className="hero-text">
              <h1>Manage Your Tickets Seamlessly</h1>
              <p>The best platform to track, manage, and resolve customer support tickets efficiently. Get started today!</p>
              <div className="hero-buttons">
                <a href="/auth/signup" className="btn btn-light">Get Started</a>
                <a href="/auth/login" className="btn btn-outline-light">Login</a>
              </div>
            </div>
          </div>
        </section>
        <section className="features-section">
            <div className="container">
                <h2>Why Choose TicketApp?</h2>
                <div className="features-grid">
                    <div className="card feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-magic"></i>
                        </div>
                        <h3>Easy to Use</h3>
                        <p>Our intuitive interface makes ticket management a breeze.</p>
                    </div>
                    <div className="card feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Collaborative</h3>
                        <p>Work with your team in real-time to resolve issues faster.</p>
                    </div>
                    <div className="card feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3>Powerful Analytics</h3>
                        <p>Gain insights into your support performance with our dashboard.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;