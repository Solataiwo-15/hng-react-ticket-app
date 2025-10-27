import React from 'react';
import './TicketModal.css'; // We will create this next

const TicketModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content card">
        <button className="modal-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default TicketModal;