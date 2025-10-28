import DashboardNavbar from '../components/DashboardNavbar';
import Footer from '../components/Footer';
import './DashboardPage.css'; 

const DashboardPage = () => {
  const stats = {
    totalTickets: 25,
    openTickets: 12,
    resolvedTickets: 13,
  };

  return (
    <div className="dashboard-page">
      <DashboardNavbar />

      <main className="dashboard-main">
        <div className="container">
          <header className="dashboard-header">
            <h1>Dashboard Overview</h1>
            <p>Here's a summary of your support ticket activity.</p>
          </header>

          <div className="stats-grid">
            <div className="card stat-card total-tickets">
              <div className="stat-icon">
                <i className="fas fa-ticket-alt"></i>
              </div>
              <div className="stat-info">
                <h2>{stats.totalTickets}</h2>
                <p>Total Tickets</p>
                <p className="stat-context">All tickets created</p>
              </div>
            </div>
            <div className="card stat-card open-tickets">
              <div className="stat-icon">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="stat-info">
                <h2>{stats.openTickets}</h2>
                <p>Open Tickets</p>
                <p className="stat-context">Tickets awaiting response</p>
              </div>
            </div>
            <div className="card stat-card resolved-tickets">
              <div className="stat-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="stat-info">
                <h2>{stats.resolvedTickets}</h2>
                <p>Resolved Tickets</p>
                <p className="stat-context">Successfully closed tickets</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;