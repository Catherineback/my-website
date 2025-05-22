import React from 'react';

export default function Contact() {
  const messageTemplate = `Hello,\n\nI’m interested in getting a free estimate for exterior cleaning services. Here are a few details about the job:\n\n- Type of service needed:\n- Address/location:\n- Preferred contact method (call, text, or email):\n- Preferred contact time (morning, afternoon, evening, or specific time):\n\nThank you,\n[Your Name]`;

  const encodedMessage = encodeURIComponent(messageTemplate);
  const mailtoLink = `mailto:M.Thomas@bluesexteriorcleaning.com?subject=Free Estimate Request&body=${encodedMessage}`;

  return (
    <section style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1>Contact Us</h1>

      {/* Contact Info Section */}
      <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Get in Touch</h2>
        <p><strong>Email:</strong> <a href="mailto:M.Thomas@bluesexteriorcleaning.com">M.Thomas@bluesexteriorcleaning.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+17605008709">(760)-500-8709</a></p>
      </div>

      {/* Template Message Section */}
      <div style={{ padding: '1rem', backgroundColor: '#eef6ff', borderRadius: '8px' }}>
        <h2>Optional Email Template</h2>
        <p>If you'd like, you can use this optional message template to help us provide a quick and accurate estimate:</p>
        <pre style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', whiteSpace: 'pre-wrap' }}>{messageTemplate}</pre>
        <a 
          href={mailtoLink}
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            backgroundColor: '#2980b9',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1rem'
          }}
        >
          Send Email with Template
        </a>
      </div>
    </section>
  );
}
