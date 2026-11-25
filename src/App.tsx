import { useState, useEffect } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Scroll to top on standard page switches
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [currentPage])

  // HELPER FUNCTION: Switches to the menu page and smoothly glides to the chosen section anchor
  const navigateToMenuCategory = (categoryId: string) => {
    setCurrentPage('menu')

    setTimeout(() => {
      const element = document.getElementById(categoryId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 120)
  }

  return (
    <>
      {/* --- NAVIGATION INTERFACE --- */}
      <nav>
  <div className="container nav-container">
    <button
      onClick={() => setCurrentPage('home')}
      className="logo"
      style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
    >
      AROMA &amp; CO.
    </button>

          <ul className="nav-links">
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('menu')}
                className={`nav-button ${currentPage === 'menu' ? 'active' : ''}`}
              >
                Menu
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('about')}
                className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* --- CONDITIONAL VIEWS COMPONENT RENDERING --- */}
      {currentPage === 'home' && <Home onCategoryClick={navigateToMenuCategory} />}
      {currentPage === 'menu' && <Menu />}
      {currentPage === 'about' && <About onNavigate={setCurrentPage} />}
      {currentPage === 'contact' && <Contact />}
    </>
  )
}

export default App