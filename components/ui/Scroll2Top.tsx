'use client'
import React, { useState, useEffect } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;

      if ((scrollPosition / (scrollHeight - clientHeight)) >= 0.90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed z-40 right-2 bottom-4 md:bottom-20 md:right-10 xl:bottom-10 w-max p-2 rounded-full border-2 border-white bg-teal ${isScrolled ? 'motion-safe:animate-bounce' : ''}`}
      style={{ display: isVisible ? 'block' : 'none', transition: 'all 2s ease-in-out' }}
    >
      <FaCircleArrowUp className='text-2xl text-white' />
    </button>
  );
};

export default ScrollToTop;