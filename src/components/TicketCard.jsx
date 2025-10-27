import React from 'react';
import './TicketCard.css'; // We will create this next

const TicketCard = ({ ticket, onDelete, onEdit }) => {
  // The 'ticket' prop will be an object from our mock data
  const { id, title, status, priority } = ticket;

  return (
    <div className="card ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{id}</span>
        {/* We use the global CSS classes for the status tag */}
        <span className={`status-tag status-${status.replace('_', '-')}`}>{status.replace('_', ' ')}</span>      </div>
      <h3 className="ticket-title">{title}</h3>
      <div className="ticket-footer">
        <span className={`priority-tag priority-${priority}`}>{priority}</span>
        <div className="ticket-actions">
            <button className="btn-icon" onClick={onEdit}> {/* Add onClick */}
                <i className="fas fa-edit"></i>
            </button>
            <button className="btn-icon btn-icon-danger" onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;