import React from "react";
import { Link } from "react-router-dom";
import { NavButtons, NavContainer, NavItemsContainer, NavTitle } from "./style";
import { useTheme } from "../../global/themeContext.js";

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <NavContainer $isDarkMode={isDarkMode}>
      <NavTitle $isDarkMode={isDarkMode}>Matrix App Store</NavTitle>
      <NavItemsContainer>
        <NavButtons $isDarkMode={isDarkMode} as={Link} to="/">
          Home
        </NavButtons>
        <NavButtons $isDarkMode={isDarkMode} as={Link} to="/favorites">
          Favorites
        </NavButtons>
        <NavButtons $isDarkMode={isDarkMode} onClick={toggleTheme}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </NavButtons>
      </NavItemsContainer>
    </NavContainer>
  );
};
