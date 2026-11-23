import { useState } from 'react'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // HELPER FUNCTION: Switches to the menu page and smoothly glides to the chosen section anchor
  const navigateToMenuCategory = (categoryId: string) => {
    setCurrentPage('menu');
    
    // We wait a split second for the menu page layout nodes to draw on the screen before scrolling
    setTimeout(() => {
      const element = document.getElementById(categoryId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* --- NAVIGATION INTERFACE --- */}
      <nav>
        <div className="container nav-container">
          <button onClick={() => setCurrentPage('home')} className="logo" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            AROMA & CO.
          </button>
          
          <ul className="nav-links">
            <li>
              <button onClick={() => setCurrentPage('home')} className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('menu')} className={`nav-button ${currentPage === 'menu' ? 'active' : ''}`}>
                Menu
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('contact')} className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}>
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* --- CONDITIONAL VIEWS COMPONENT RENDERING --- */}
      {/* We pass our new scrolling navigator helper down to the Home page as a dynamic property hook */}
      {currentPage === 'home' && <Home onCategoryClick={navigateToMenuCategory} />}
      {currentPage === 'menu' && <Menu />}
      {currentPage === 'contact' && <Contact />}
    </>
  )
}

export default App