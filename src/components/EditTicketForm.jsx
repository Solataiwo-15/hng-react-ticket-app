import React, { useState, useEffect } from 'react';
import '../pages/AuthPages.css';

const EditTicketForm = ({ ticket, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');
  const [error, setError] = useState('');
  
  // This effect pre-fills the form with the ticket's current data
  useEffect(() => {
    if (ticket) {
      setTitle(ticket.title);
      setDescription(ticket.description || '');
      setStatus(ticket.status);
    }
  }, [ticket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '') {
      setError('Title is mandatory.');
      return;
    }
    setError('');

    const updatedTicket = { ...ticket, title, description, status };
    onSave(updatedTicket);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form" noValidate>
      <h2 className="auth-title">Edit Ticket #{ticket.id}</h2>
      {/* ... form fields are identical to CreateTicketForm ... */}
      <div className="form-group">
        <label htmlFor="edit-title">Title</label>
        <input id="edit-title" type="text" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="edit-description">Description</label>
        <textarea id="edit-description" className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} rows="4"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="edit-status">Status</label>
        <select id="edit-status" className="form-input" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      {error && <div className="error-message" style={{ display: 'block' }}>{error}</div>}
      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn">Cancel</button>
        <button type="submit" className="btn btn-primary">Update Ticket</button>
      </div>
    </form>
  );
};

export default EditTicketForm;