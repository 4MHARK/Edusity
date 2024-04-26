import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

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

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        {/* Use ScrollLink for smooth scrolling */}
        <li><ScrollLink to="Home" smooth={true} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="program" smooth={true} duration={500}>Program</ScrollLink></li>
        <li><ScrollLink to="about-us" smooth={true} duration={500}>About us</ScrollLink></li>
        <li><ScrollLink to="campus" smooth={true} duration={500}>Campus</ScrollLink></li>
        <li><ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink></li>
        {/* ScrollLink should be placed inside the button */}
        <li><button className='btn'><ScrollLink to="contact-us" smooth={true} duration={500}>Contact us</ScrollLink></button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
