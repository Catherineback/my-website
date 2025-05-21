import React from 'react';

export default function Home() {
  return (
    <section
      style={{
        maxWidth: '800px',
        margin: '2rem auto',
        padding: '0 1rem',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#2c3e50' }}>
        Welcome to BluesExteriorCleaning
      </h1>

      <img
        src={process.env.PUBLIC_URL + '/washer.png'}
        alt="Pressure washing example"
        style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2rem' }}
      />

      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        We are your trusted pressure washing experts serving the Oceanside area. From homes and driveways to decks and patios,
        we deliver quality service with affordable pricing to make your property shine.
      </p>

      <h2 style={{ color: '#2c3e50', marginBottom: '0.75rem' }}>Why Choose Us?</h2>
      <ul style={{ fontSize: '1.1rem', lineHeight: '1.5', marginBottom: '2rem' }}>
        <li>Experienced and professional staff</li>
        <li>Eco-friendly and safe cleaning methods</li>
        <li>Free estimates with no obligation</li>
        <li>100% satisfaction guaranteed</li>
      </ul>

      <button
        onClick={() => (window.location.href = '/contact')}
        style={{
          backgroundColor: '#2980b9',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          fontSize: '1.1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
        }}
      >
        Get a Free Estimate
      </button>
    </section>
  );
}
