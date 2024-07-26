import React, { createContext, useState } from 'react';

export const MobileMenuContext = createContext();

export const MobileMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
