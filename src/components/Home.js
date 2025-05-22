import React from 'react';

export default function Home() {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Welcome to BluesExteriorCleaning</h1>

      {/* 🔴 Promo Banner */}
      <div style={styles.promoBanner}>
        Save 15% on Your First Service
      </div>

      <p style={styles.paragraph}>
        Serving the Oceanside area, we specialize in professional pressure washing services
        for homes, driveways, decks, patios, and more. With top-tier equipment and a dedication
        to customer satisfaction, we make your property shine—safely and affordably.
      </p>

      <h2 style={styles.subheading}>Why Choose Us</h2>
      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Experienced Team</h3>
          <p style={styles.cardText}>Skilled professionals with years of hands-on cleaning expertise.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Eco-Friendly Methods</h3>
          <p style={styles.cardText}>Safe for your family, pets, and the environment.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>No-Obligation Estimates</h3>
          <p style={styles.cardText}>Transparent pricing—no surprises, no pressure.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Satisfaction Guaranteed</h3>
          <p style={styles.cardText}>We don’t leave until you’re 100% happy with the results.</p>
        </div>
      </div>

      <button
        onClick={() => (window.location.href = '/contact')}
        style={styles.button}
      >
        Get a Free Estimate
      </button>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '3rem auto',
    padding: '0 1.5rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#2c3e50',
  },
  heading: {
    fontSize: '2.75rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  promoBanner: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '1rem 1.25rem',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '1.25rem',
    marginBottom: '2rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.7',
    marginBottom: '2rem',
    color: '#34495e',
  },
  subheading: {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '1.25rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  },
  button: {
    backgroundColor: '#2980b9',
    color: '#fff',
    border: 'none',
    padding: '0.85rem 1.75rem',
    fontSize: '1.15rem',
    fontWeight: '500',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'block',
    margin: '0 auto',
  },
};
