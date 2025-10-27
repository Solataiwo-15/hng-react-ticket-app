import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // We will create this file

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
        <Navbar />
        <main className="container not-found-content">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist. It might have been moved or deleted.</p>
            <Link to="/" className="btn btn-primary">Go to Homepage</Link>
        </main>
        <Footer />
    </div>
  );
};

export default NotFoundPage;