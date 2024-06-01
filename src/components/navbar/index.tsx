import React from "react";
import { Link } from "react-router-dom";
import { NavButtons, NavContainer, NavItemsContainer, NavTitle,DarkButton } from "./style";
import { useTheme } from "../../global/themeContext";

interface NavbarProps {
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode }) => {
  const { toggleTheme } = useTheme();
  return (
    <NavContainer>
      <NavTitle $isDarkMode={isDarkMode}>App Store</NavTitle>
      <NavItemsContainer>
        <NavButtons $isDarkMode={isDarkMode} as={Link} to="/">
          Home
        </NavButtons>
        <NavButtons $isDarkMode={isDarkMode} as={Link} to="/favorites">
          Favorites
        </NavButtons>
        <DarkButton $isDarkMode={isDarkMode} onClick={toggleTheme} />
      </NavItemsContainer>
    </NavContainer>
  );
};

export default Navbar;
