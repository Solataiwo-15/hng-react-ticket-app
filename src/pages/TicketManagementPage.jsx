import { useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import Footer from '../components/Footer';
import TicketCard from '../components/TicketCard';
import TicketModal from '../components/TicketModal';
import CreateTicketForm from '../components/CreateTicketForm';
import EditTicketForm from '../components/EditTicketForm';
import { initialTickets } from '../utils/mock-data';
import './TicketManagementPage.css';

const TicketManagementPage = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentlyEditingTicket, setCurrentlyEditingTicket] = useState(null);

  const handleAddTicket = (newTicket) => {
    setTickets([newTicket, ...tickets]);
    setIsCreateModalOpen(false);
  };

  const handleDeleteTicket = (ticketIdToDelete) => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      setTickets(tickets.filter(ticket => ticket.id !== ticketIdToDelete));
    }
  };

  const handleOpenEditModal = (ticketToEdit) => {
    setCurrentlyEditingTicket(ticketToEdit);
    setIsEditModalOpen(true);
  };

  const handleUpdateTicket = (updatedTicket) => {
    setTickets(tickets.map(ticket => 
      ticket.id === updatedTicket.id ? updatedTicket : ticket
    ));
    setIsEditModalOpen(false);
    setCurrentlyEditingTicket(null);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentlyEditingTicket(null);
  };

  return (
    <div className="ticket-management-page">
      <DashboardNavbar />
      
      <main className="ticket-main">
        <div className="container">
          <header className="ticket-page-header">
            <h1>Manage Tickets</h1>
            <button className="btn btn-primary" onClick={() => setIsCreateModalOpen(true)}>
              <i className="fas fa-plus"></i> Create New Ticket
            </button>
          </header>

          <div className="ticket-list">
            {tickets.map((ticket) => (
              <TicketCard 
                key={ticket.id} 
                ticket={ticket}
                onDelete={() => handleDeleteTicket(ticket.id)}
                onEdit={() => handleOpenEditModal(ticket)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <TicketModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)}>
        <CreateTicketForm onSave={handleAddTicket} onCancel={() => setIsCreateModalOpen(false)} />
      </TicketModal>
    
      <TicketModal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>

        {currentlyEditingTicket && (
          <EditTicketForm 
            ticket={currentlyEditingTicket} 
            onSave={handleUpdateTicket} 
            onCancel={handleCloseEditModal} 
          />
        )}
        
      </TicketModal>
    </div>
  );
};

export default TicketManagementPage;