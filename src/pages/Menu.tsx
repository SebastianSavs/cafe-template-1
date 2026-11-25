export default function Menu() {
  return (
    <>
      {/* --- Page Hero Section --- */}
      <header className="menu-hero">
        <h1>Our Menu</h1>
      </header>

      <main className="container section-padding">
        <div className="menu-layout">
          
          {/* --- Sticky Sub-Navigation Bar --- */}
          <aside className="sidebar">
            <ul>
              <li><a href="#coffee">Coffee</a></li>
              <li><a href="#breakfast">Breakfast</a></li>
              <li><a href="#cold-drinks">Cold Drinks</a></li>
            </ul>
          </aside>

          {/* --- Main Menu Content Display --- */}
          <div className="menu-content">
            
            {/* ================= CATEGORY 1: COFFEE ================= */}
            <section id="coffee" className="category-section">
              <h2>Coffee Specialties</h2>
              <div className="menu-grid">
                
                {/* Item 1 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Cortado.jpg" alt="Cortado" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$4.25</span><h4>Cortado</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 60 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Dairy</div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Cappucino.jpg" alt="Cappuccino" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$4.50</span><h4>Cappuccino</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 120 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Dairy</div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Flat_White.jpg" alt="Flat White" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$4.75</span><h4>Flat White</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 110 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Dairy</div>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Esspresso.jpg" alt="Espresso Shot" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$3.00</span><h4>Espresso</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 5 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> None</div>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Americano.jpg" alt="Americano" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$3.75</span><h4>Americano</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 10 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> None</div>
                    </div>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Machiatto.jpg" alt="Macchiato" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$4.50</span><h4>Macchiato</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 18 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Dairy</div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* ================= CATEGORY 2: BREAKFAST ================= */}
            <section id="breakfast" className="category-section">
              <h2>Breakfast</h2>
              <div className="menu-grid">
                
                {/* Item 1 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Croissant.jpg" alt="Croissant" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$4.75</span><h4>Croissant</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 280 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Gluten, Dairy, Eggs</div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Avocado_Toast.jpg" alt="Avocado Toast" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$7.50</span><h4>Avocado Toast</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 340 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Gluten, Sesame</div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Maple_Pancakes.jpg" alt="Pancakes" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$8.25</span><h4>Maple Pancakes</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 520 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Gluten, Eggs, Dairy</div>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Salmon_Bagel.jpg" alt="Salmon Bagel" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$9.00</span><h4>Salmon Bagel</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 410 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Fish, Gluten, Dairy</div>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Fired_Eggs.jpg" alt="Fried Eggs" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$7.00</span><h4>Fried Eggs</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 380 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Eggs, Gluten, Dairy</div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* ================= CATEGORY 3: COLD DRINKS ================= */}
            <section id="cold-drinks" className="category-section">
              <h2>Cold Drinks</h2>
              <div className="menu-grid">
                
                {/* Item 1 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Nitro_Cold_Brew.jpg" alt="Cold Brew" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$5.00</span><h4>Nitro Cold Brew</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 5 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> None</div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Iced_Latte.jpg" alt="Iced Latte" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$5.25</span><h4>Iced Latte</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 140 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Dairy</div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Berry_Smothie.jpg" alt="Fruit Smoothie" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$6.00</span><h4>Berry Smoothie</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 210 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> None</div>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Iced_Matcha.jpg" alt="Iced Matcha" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$5.50</span><h4>Iced Matcha</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 130 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Dairy</div>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Limonade.jpg" alt="Limonade" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$4.60</span><h4>Limonade</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 80 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> None</div>
                    </div>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="menu-card">
                  <div className="image-container"><img src="/img/Mango_Smoothie.jpg" alt="Mango Smoothie" /></div>
                  <div className="menu-details">
                    <div className="menu-header"><span className="menu-price">$7.00</span><h4>Mango Smoothie</h4></div>
                    <div className="product-meta">
                      <div className="meta-line"><strong>Kcal:</strong> 150 kcal</div>
                      <div className="meta-line"><strong>Allergens:</strong> Dairy</div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </main>

      {/* --- Same Shared Brand Footer Layout as Home.tsx --- */}
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