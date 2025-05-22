import React from 'react';

export default function Contact() {
  const messageTemplate = `Hello,\n\nI’m interested in getting a free estimate for exterior cleaning services. Here are a few details about the job:\n\n- Type of service needed:\n- Address/location:\n- Preferred contact method (call, text, or email):\n- Preferred contact time (morning, afternoon, evening, or specific time):\n\nThank you,\n[Your Name]`;

  const encodedMessage = encodeURIComponent(messageTemplate);
  const mailtoLink = `mailto:M.Thomas@bluesexteriorcleaning.com?subject=Free Estimate Request&body=${encodedMessage}`;

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>

      {/* Contact Info Section */}
      <div style={styles.contactInfo}>
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <p><strong>Email:</strong> <a href="mailto:M.Thomas@bluesexteriorcleaning.com" style={styles.link}>M.Thomas@bluesexteriorcleaning.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+17605008709" style={styles.link}>(760)-500-8709</a></p>
      </div>

      {/* Template Message Section */}
      <div style={styles.templateSection}>
        <h2 style={styles.sectionTitle}>Optional Email Template</h2>
        <p>If you'd like, you can use this optional message template to help us provide a quick and accurate estimate:</p>
        <pre style={styles.templateBox}>{messageTemplate}</pre>
        <a 
          href={mailtoLink}
          style={styles.emailButton}
        >
          Send Email with Template
        </a>
      </div>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: '2rem auto',
    padding: '0 1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#001c55', // Penn Blue main text
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: '#0a2472', // Royal Blue
    textAlign: 'center',
  },
  contactInfo: {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0', // Light grey background matching service cards
    borderRadius: '8px',
    color: '#001c55',
  },
  sectionTitle: {
    fontSize: '1.6rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#0a2472', // Royal Blue
  },
  link: {
    color: '#0e6ba8', // Bice Blue links
    textDecoration: 'none',
  },
  templateSection: {
    padding: '1rem',
    backgroundColor: '#eef6ff', // Pale Blue background for section
    borderRadius: '8px',
    color: '#001c55',
  },
  templateBox: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '4px',
    whiteSpace: 'pre-wrap',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: '1rem',
    color: '#34495e', // Dark Slate for readability
    marginTop: '0.5rem',
  },
  emailButton: {
    display: 'inline-block',
    marginTop: '1rem',
    backgroundColor: '#0a2472', // Royal Blue button
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  },
};
