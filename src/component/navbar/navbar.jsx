import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on navigation (for mobile)
  const handleMenuClick = () => setMenuOpen(false);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <div
        className="navbar-hamburger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        tabIndex={0}
        role="button"
      >
        <span />
        <span />
        <span />
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <ScrollLink to="Home" smooth={true} duration={500} onClick={handleMenuClick}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="program" smooth={true} duration={500} onClick={handleMenuClick}>
            Program
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about-us" smooth={true} duration={500} onClick={handleMenuClick}>
            About us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="campus" smooth={true} duration={500} onClick={handleMenuClick}>
            Campus
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="testimonials" smooth={true} duration={500} onClick={handleMenuClick}>
            Testimonials
          </ScrollLink>
        </li>
        <li>
          <button className='btn'>
            <ScrollLink to="contact-us" smooth={true} duration={500} onClick={handleMenuClick}>
              Contact us
            </ScrollLink>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
