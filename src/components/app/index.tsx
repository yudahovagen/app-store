import React from "react";
import Router from "./router/Router";
import { AppContainer } from "./style";
import { useTheme } from "../../global/themeContext";

const App: React.FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <AppContainer $isDarkMode={isDarkMode}>
      <Router />
    </AppContainer>
  );
};

export default App;
