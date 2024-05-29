import React, { createContext, useState, useContext, useEffect } from "react";
import config from "../config";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for the theme preference
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : config.darkMode;
  });
  //TODO change in localStorage name from "theme" to "isDarkMode" and set it as boolean
  useEffect(() => {
    // Save the theme preference in local storage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
