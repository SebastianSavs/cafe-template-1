export default function About({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <>
      {/* --- HERO BANNER (Matches .menu-hero in your CSS) --- */}
      <header className="menu-hero">
        <div>
          <p style={{ letterSpacing: '3px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>
            OUR STORY
          </p>
          <h1>Crafted With Passion</h1>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="container section-padding">
        <div className="intro-section">
          <h2 className="section-title">More Than Just a Morning Cup</h2>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: '#776555', fontSize: '1.05rem' }}>
            Founded in 2026, Aroma &amp; Co. brings together ethically sourced specialty beans, freshly baked pastries,
            and a warm, inviting space built for conversation, focus, and community.
          </p>
        </div>

        {/* Alternating Story Rows (Matches .feature-container & .feature-item) */}
        <div className="feature-container">
          <div className="feature-item">
            <div className="feature-text">
              <h3>Direct-Trade Single Origin Beans</h3>
              <p>
                We partner directly with family-owned farms to source peak-harvest Arabica beans. Every batch is
                roasted in small quantities to highlight natural notes of cocoa, toasted almond, and caramel without
                bitterness.
              </p>
            </div>
            <div className="feature-image-box">
              <div className="image-wrapper">
                <img src="/img/SmallBatchRoastedDaily.jpg" alt="Freshly roasted coffee beans" />
              </div>
              <div className="image-center-overlay">
                <span className="overlay-badge">Small-Batch Roasted Daily</span>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-text">
              <h3>Baked Fresh Every Morning</h3>
              <p>
                From flaky butter croissants to seasonal fruit tarts, our pastry case is filled straight from the oven
                at dawn—crafted with local dairy, organic flour, and zero artificial preservatives.
              </p>
            </div>
            <div className="feature-image-box">
              <div className="image-wrapper">
                <img src="/img/FreshBakeryEveryMorning.jpg" alt="Artisanal café pastries" />
              </div>
              <div className="image-center-overlay">
                <span className="overlay-badge">Artisanal Bakery Kitchen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Bottom CTA */}
        {onNavigate && (
          <div style={{ textAlign: 'center', marginTop: '70px', padding: '40px 20px', backgroundColor: 'var(--white)', borderRadius: '12px' }}>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '12px' }}>
              Ready for Your Next Cup?
            </h3>
            <p style={{ color: '#776555', marginBottom: '24px' }}>
              Explore our espresso bar, breakfast plates, and refreshing cold brews.
            </p>
            <button onClick={() => onNavigate('menu')} className="btn" style={{ border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
              Explore Our Menu
            </button>
          </div>
        )}
      </main>

      {/* --- FOOTER (Matches footer & .footer-container in your CSS) --- */}
      <footer>
        <div className="footer-container">
          <p>© 2026 Aroma &amp; Co. All rights reserved.</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}