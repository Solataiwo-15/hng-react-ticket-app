import { useState } from 'react';
import '../pages/AuthPages.css';

const CreateTicketForm = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open'); 
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '') {
      setError('Title is mandatory.');
      return;
    }
    if (!['open', 'in_progress', 'closed'].includes(status)) {
      setError('Invalid status selected.');
      return;
    }
    setError('');

    const newTicket = {
      id: `TICKET-${Math.floor(Math.random() * 1000)}`, 
      title,
      description,
      status,
      priority: 'medium', 
      createdAt: new Date(),
    };

    onSave(newTicket); 
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form" noValidate>
      <h2 className="auth-title">Create New Ticket</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Fix homepage bug"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description (Optional)</label>
        <textarea
          id="description"
          className="form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          placeholder="Provide a detailed description of the issue..."
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select 
          id="status" 
          className="form-input" 
          value={status} 
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {error && <div className="error-message" style={{ display: 'block' }}>{error}</div>}

      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn">Cancel</button>
        <button type="submit" className="btn btn-primary">Save Ticket</button>
      </div>
    </form>
  );
};

export default CreateTicketForm;