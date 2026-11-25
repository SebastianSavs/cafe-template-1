import { useState } from 'react';

export default function Contact() {
  // React State variables to capture form values dynamically
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission gracefully without page reloads
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been sent.\nWe will contact you at ${email}.`);
    
    // Clear out the form inputs completely after clicking send
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      {/* --- 1. HERO BANNER SECTION WITH SMALL LAYERED IMAGE --- */}
      <header className="contact-hero">
        <div className="contact-hero-content">
          <div className="small-hero-img-box">
            <img 
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=200" 
              alt="Coffee cup layout" 
            />
          </div>
          <h1 className="contact-hero-title">Get In Touch</h1>
        </div>
      </header>

      {/* --- 2. MAIN TWO-COLUMN CONTENT LAYOUT --- */}
      <div className="container section-padding" style={{ paddingTop: '40px' }}>
        <div className="contact-wrapper">
          
          {/* --- LEFT SIDE: THE INTERACTIVE CONTACT FORM --- */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">How can we help you?</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell us what's on your mind...." 
                  required 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>

          {/* --- RIGHT SIDE: HOURS & DIRECTIONS INFO --- */}
          <div className="contact-info-column">
            <div className="info-box">
              <h3>Our Coffeehouse</h3>
              <p>123 Roast Master Boulevard<br />Beans District, CA 90210</p>
            </div>
            
            <div className="info-box">
              <h3>Hours of Operation</h3>
              <p><strong>Mon - Fri:</strong> 6:30 AM - 7:00 PM</p>
              <p><strong>Sat - Sun:</strong> 8:00 AM - 5:00 PM</p>
            </div>
            
            <div className="map-placeholder">
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1565342385493!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Contact Page Location Map"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- 3. SHARED BRAND FOOTER --- */}
      <footer>
        <div className="footer-container">
          <p>© 2026 Aroma & Co. All rights reserved.</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}