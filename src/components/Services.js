import React from 'react';

export default function Services() {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Our Services</h1>
      <p style={styles.subtitle}>
        Quality exterior cleaning to keep your home looking its best.
      </p>

      <div style={styles.servicesGrid}>
        <div style={styles.serviceCard}>Pressure / Soft Washing</div>
        <div style={styles.serviceCard}>Solar Panel Cleaning</div>
        <div style={styles.serviceCard}>Driveway Cleaning</div>
        <div style={styles.serviceCard}>Window Cleaning</div>
        <div style={styles.serviceCard}>Gutter Cleaning</div>
        <div style={styles.serviceCard}>All Things Exterior Cleaning</div>
      </div>

      <p style={styles.contactText}>Contact us today for a free estimate!</p>

      <h2 style={styles.beforeAfterTitle}>Before & After</h2>
      <div style={styles.grid}>
        {/* Brick Cleaning */}
        <div style={styles.imagePair}>
          <h3 style={styles.imageCaption}>Before - Brick</h3>
          <img
            src={process.env.PUBLIC_URL + '/beforebrick.jpeg'}
            alt="Before brick cleaning"
            style={styles.image}
          />
        </div>
        <div style={styles.imagePair}>
          <h3 style={styles.imageCaption}>After - Brick</h3>
          <img
            src={process.env.PUBLIC_URL + '/beforebrick.jpeg'}
            alt="After brick cleaning (placeholder)"
            style={styles.image}
          />
        </div>

        {/* Wall Cleaning */}
        <div style={styles.imagePair}>
          <h3 style={styles.imageCaption}>Before - Wall</h3>
          <img
            src={process.env.PUBLIC_URL + '/beforewall.jpeg'}
            alt="Before wall cleaning"
            style={styles.image}
          />
        </div>
        <div style={styles.imagePair}>
          <h3 style={styles.imageCaption}>After - Wall</h3>
          <img
            src={process.env.PUBLIC_URL + '/beforewall.jpeg'}
            alt="After wall cleaning (placeholder)"
            style={styles.image}
          />
        </div>

        {/* Concrete Cleaning */}
        <div style={styles.imagePair}>
          <h3 style={styles.imageCaption}>Before - Concrete</h3>
          <img
            src={process.env.PUBLIC_URL + '/beforeconcrete.jpeg'}
            alt="Before concrete cleaning"
            style={styles.image}
          />
        </div>
        <div style={styles.imagePair}>
          <h3 style={styles.imageCaption}>After - Concrete</h3>
          <img
            src={process.env.PUBLIC_URL + '/beforeconcrete.jpeg'}
            alt="After concrete cleaning (placeholder)"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: 800,
    margin: '3rem auto',
    padding: '0 1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#34495e',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '2.5rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
  serviceCard: {
    backgroundColor: '#ecf0f1',
    padding: '1rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#2c3e50',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  contactText: {
    textAlign: 'center',
    marginTop: '1rem',
    fontWeight: '600',
    fontSize: '1.15rem',
    color: '#2980b9',
    marginBottom: '3rem',
  },
  beforeAfterTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#2c3e50',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(3, 320px)',
    gap: '2rem 3rem',
    maxWidth: 700,
    margin: '0 auto',
  },
  imagePair: {
    textAlign: 'center',
  },
  imageCaption: {
    fontSize: '1.2rem',
    marginBottom: '0.75rem',
    color: '#2c3e50',
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: '280px',
    borderRadius: 8,
    boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
    objectFit: 'cover',
  },
};
