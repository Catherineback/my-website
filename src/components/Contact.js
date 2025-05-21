import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would normally send form data to a backend or service
    setSubmitted(true);
  }

  return (
    <section style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1>Contact Us</h1>

      {/* Contact Info Section */}
      <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Get in Touch</h2>
        <p><strong>Email:</strong> <a href="mailto:M.Thomas@bluesexteriorcleaning.com">M.Thomas@bluesexteriorcleaning.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+17605008709">(760)-500-8709</a></p>
        <p>Feel free to call or email us directly!</p>
      </div>

      {/* Contact Form or Thank You Message */}
      {submitted ? (
        <p>Thanks for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Your Name" required style={{ padding: '0.5rem', fontSize: '1rem' }} />
          <input type="email" placeholder="Your Email" required style={{ padding: '0.5rem', fontSize: '1rem' }} />
          <textarea placeholder="Your Message" required style={{ padding: '0.5rem', fontSize: '1rem', minHeight: '100px' }}></textarea>
          <button type="submit" style={{ backgroundColor: '#2980b9', color: 'white', border: 'none', padding: '0.75rem', fontSize: '1rem', borderRadius: '4px', cursor: 'pointer' }}>
            Send
          </button>
        </form>
      )}
    </section>
  );
}

