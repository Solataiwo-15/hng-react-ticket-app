import React from 'react';
import { Navigate } from 'react-router-dom';

// This component will wrap our protected pages
// It takes one prop: 'children', which will be the page component we want to render
const ProtectedRoute = ({ children }) => {
  // 1. Get the session data from localStorage
  const session = localStorage.getItem('ticketapp_session');

  // 2. Check if a session exists
  if (!session) {
    // If NO session is found, redirect the user to the login page.
    // The <Navigate> component from react-router-dom handles the redirection.
    return <Navigate to="/auth/login" replace />;
  }
  
  // We can also add an optional check for token expiry
  try {
      const sessionData = JSON.parse(session);
      if (sessionData.expiresAt < new Date().getTime()) {
          // If the token is expired, clear it and redirect
          localStorage.removeItem('ticketapp_session');
          return <Navigate to="/auth/login" replace />;
      }
  } catch (error) {
      // If the session data is corrupted, clear it and redirect
      localStorage.removeItem('ticketapp_session');
      return <Navigate to="/auth/login" replace />;
  }

  // 3. If a valid session IS found, render the child component.
  // 'children' will be whatever page we are trying to protect (e.g., <DashboardPage />).
  return children;
};

export default ProtectedRoute;