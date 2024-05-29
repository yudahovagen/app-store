import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyle from "./global/global.style";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/app";
import { ThemeProvider } from "./global/themeContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

}
