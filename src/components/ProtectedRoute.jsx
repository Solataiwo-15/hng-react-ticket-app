import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const session = localStorage.getItem('ticketapp_session');

  if (!session) {
    return <Navigate to="/auth/login" replace />;
  }
  try {
      const sessionData = JSON.parse(session);
      if (sessionData.expiresAt < new Date().getTime()) {
          localStorage.removeItem('ticketapp_session');
          return <Navigate to="/auth/login" replace />;
      }
      // eslint-disable-next-line no-unused-vars
  } catch (error) {
      localStorage.removeItem('ticketapp_session');
      return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;