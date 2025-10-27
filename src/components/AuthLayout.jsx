import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLayout.css'; // We will create this next

const AuthLayout = ({ title, children, footerText, footerLink, footerLinkText }) => {
  return (
    <div className="auth-container">
      <div className="auth-card card">
        <Link to="/" className="auth-logo">TicketApp</Link>
        <h1 className="auth-title">{title}</h1>
        {children}
        <div className="auth-footer">
          {footerText} <Link to={footerLink}>{footerLinkText}</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;