import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <h2>BluesExteriorCleaning</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route to redirect unknown URLs to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
