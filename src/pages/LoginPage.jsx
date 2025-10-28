import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import './AuthPages.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        let isValid = true;
        setEmailError('');
        setPasswordError('');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            setEmailError('Email is required.');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        }

        if (password.trim() === '') { 
            setPasswordError('Password is required.');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const session = {
            token: 'dummy-jwt-token-for-hng-task',
            user: {
                name: 'Ahmad Taiwo',
                email: email,
            },
            expiresAt: new Date().getTime() + 3600 * 1000,
        }

        localStorage.setItem('ticketapp_session', JSON.stringify(session));

        navigate('/dashboard');
    }

  return (
    <AuthLayout
      title="Welcome Back!"
      footerText="Don't have an account?"
      footerLink="/auth/signup"
      footerLinkText="Sign Up"
    >
      <form className="auth-form" onSubmit={handleLogin} noValidate>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            className="form-input" 
            placeholder="you@example.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
          <div className="error-message">{emailError}</div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            className="form-input" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          <div className="error-message">{passwordError}</div>
        </div>
        <button type="submit" className="btn btn-primary full-width">Login</button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;