// 1. Tell TypeScript that this component accepts our onCategoryClick function property hook
export default function Home({ onCategoryClick }: { onCategoryClick: (id: string) => void }) {
  return (
    <>
      {/* --- HERO BANNER --- */}
      <header className="hero">
        <div className="container hero-content">
          <h1>Perfectly Roasted, Daily.</h1>
          <p>Others make coffee. We make art.</p>
          {/* Make the hero button jump directly to the coffee section on click */}
          <button onClick={() => onCategoryClick('coffee')} className="btn" style={{ border: 'none', cursor: 'pointer' }}>
            View Our Menu
          </button>
        </div>
      </header>

      {/* --- MAIN PRODUCT CATEGORIES CONTAINER --- */}
      <main className="container section-padding">
        <div className="intro-section">
          <h2 className="section-title">Enjoy Our Products</h2>
        </div>
        
        <div className="category-grid">
          
          {/* Card 1: Breakfast Button link hook */}
          <button onClick={() => onCategoryClick('breakfast')} className="category-card" style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=500" alt="Breakfast" />
            </div>
            <div className="category-overlay">
              <h3>Breakfast</h3>
            </div>
          </button>

          {/* Card 2: Coffee Button link hook */}
          <button onClick={() => onCategoryClick('coffee')} className="category-card" style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500" alt="Hot Coffee" />
            </div>
            <div className="category-overlay">
              <h3>Coffee</h3>
            </div>
          </button>

          {/* Card 3: Cold Drinks Button link hook */}
          <button onClick={() => onCategoryClick('cold-drinks')} className="category-card" style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500" alt="Cold Drinks" />
            </div>
            <div className="category-overlay">
              <h3>Cold Drinks</h3>
            </div>
          </button>

        </div>
        
        {/* ... the rest of your home page remains completely untouched ... */}

        {/* --- 4. FEATURE ARTICLE LAYOUT ITEMS --- */}
        <div className="feature-container">
          <div className="feature-item">
            <div className="feature-text">
              <h3>What Makes a Coffee Actually Good?</h3>
              <p>Truly exceptional coffee is a delicate balance of science and craft. It starts with the water quality—which makes up 98% of your cup—and relies on a precise brewing temperature between 195°F and 205°F. When high-quality beans are ground uniformly and extracted at the perfect rate, it unlocks a harmonious balance of sweetness, pleasant acidity, and a smooth body, free of any harsh bitterness.</p>
            </div>
            <div className="feature-image-box">
              <div className="image-wrapper">
                <img src="img/WhatMakesACoffeeGood.jpg" alt="Latte Art Close-up" />
              </div>
              <div className="image-center-overlay">
                <div className="overlay-badge">What Makes a Coffee Actually Good?</div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-text">
              <h3>How to Fully Enjoy Your Coffee</h3>
              <p>To experience the full spectrum of flavors, treat your coffee like a fine wine. Start by inhaling the aroma before taking your first sip—your sense of smell handles most of the flavor complexity. Take a small sip and let it coat your tongue. Notice the initial notes, the weight or texture of the liquid, and the lingering aftertaste. As the coffee cools slightly, hidden notes of fruit, chocolate, or spice will beautifully reveal themselves.</p>
            </div>
            <div className="feature-image-box">
              <div className="image-wrapper">
                <img src="img/EnjoyACoffee.jpg" alt="Pouring Coffee" />
              </div>
              <div className="image-center-overlay">
                <div className="overlay-badge">How to Fully Enjoy Your Coffee</div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-text">
              <h3>Why the Beans Are Important</h3>
              <p>The choice of bean dictates the entire personality of your drink. Arabica beans grow at high altitudes, offering complex, sweeter flavors ranging from floral to bright citrus. Robusta beans grow lower to the ground, containing double the caffeine and producing a deep, earthy bitterness with a rich crema—perfect for traditional espressos. The soil, climate, and region where these beans are harvested give them a unique "terroir" that cannot be replicated anywhere else.</p>
            </div>
            <div className="feature-image-box">
              <div className="image-wrapper">
                <img src="img/WhyBeansAreImportant.jpg" alt="Fresh Roasted Coffee Beans" />
              </div>
              <div className="image-center-overlay">
                <div className="overlay-badge">Why the Beans Are Important</div>
              </div>
            </div>
          </div>
        </div>
      </main>
        
      {/* --- 5. LOCATION DETAILS --- */}
      <div className="intro-section">
        <h2 className="section-title">Where to Find Us</h2>
      </div>

      <div className="location-wrapper">
        <div className="location-info">
          <h3>Visit Our Location</h3>
          <p className="location-lead">We are located in the heart of the historic downtown district, right next to the central park.</p>
          
          <div className="detail-box">
            <h4>Address</h4>
            <p>123 Roast Master Boulevard<br />Beans District, CA 90210</p>
          </div>

          <div className="detail-box">
            <h4>Get in Touch</h4>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> hello@aromacoffee.com</p>
          </div>

          <a href="/contact" className="btn" style={{ marginTop: '10px' }}>Contact Us</a>
        </div>

        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1565342385493!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>

     {/* --- 6. FOOTER SECTION --- */}
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