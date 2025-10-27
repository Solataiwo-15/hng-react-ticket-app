import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import './AuthPages.css';

const SignupPage = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for error messages
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    // --- Start Validation ---
    let isValid = true;
    setFullNameError('');
    setEmailError('');
    setPasswordError('');

    if (fullName.trim() === '') {
      setFullNameError('Full name is required.');
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (password.trim().length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }
    // --- End Validation ---

    // --- Simulate Successful Signup & Login ---
    const session = {
      token: 'dummy-jwt-token-for-hng-task-signup',
      user: {
        name: fullName,
        email: email,
      },
      expiresAt: new Date().getTime() + 3600 * 1000,
    };

    localStorage.setItem('ticketapp_session', JSON.stringify(session));
    
    // --- Redirect to Dashboard ---
    navigate('/dashboard');
  };

  return (
    <AuthLayout
      title="Create Your Account"
      footerText="Already have an account?"
      footerLink="/auth/login"
      footerLinkText="Login"
    >
      <form className="auth-form" onSubmit={handleSignup} noValidate>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            className="form-input" 
            placeholder="Ahmad Taiwo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <div className="error-message">{fullNameError}</div>
        </div>
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
            placeholder="Minimum 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error-message">{passwordError}</div>
        </div>
        <button type="submit" className="btn btn-primary full-width">Create Account</button>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;