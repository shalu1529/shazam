import React, { useEffect } from 'react';
import shazam from '../assets/shazam.png'; // Adjust the path according to your project structure

function FixedLogo() {

  // Effect to scale logo on scroll
  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector('.fixed-logo');
      const scaleValue = 1 + window.scrollY / 1000; // Adjust scale based on scroll position
      if (logo) {
        logo.style.transform = `scale(${scaleValue})`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <img 
      src={shazam} 
      alt="Shazam Logo" 
      className="fixed-logo fixed bottom-24 right-4 w-12 h-12 md:w-16 md:h-16 z-50" // Adjust styling as needed
      style={{ transition: 'transform 0.2s ease-in-out' }}
    />
  );
}

export default FixedLogo;
