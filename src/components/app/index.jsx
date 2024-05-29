import React from "react";
import Router from "../../global/router/Router";
import { AppContainer } from "./style";
import { useTheme } from "../../global/themeContext.js";

export const App = () => {
  const { isDarkMode } = useTheme();
  return (
      <AppContainer $isDarkMode={isDarkMode}>
        <Router />
      </AppContainer>
  );
};
