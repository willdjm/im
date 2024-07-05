// components/ScrollTop.tsx

import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false); // Definindo isVisible como boolean

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-8 right-10 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-red-400 focus:outline-none"
          onClick={scrollToTop}
        >
          <IoIosArrowUp size={24} />
        </button>
      )}
    </div>
  );
};
