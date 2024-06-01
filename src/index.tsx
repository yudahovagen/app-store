import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyle from "./global/global.style";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./global/themeContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/app";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
