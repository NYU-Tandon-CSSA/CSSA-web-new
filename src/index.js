import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { LanguageProvider } from './components/UseLanguage';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
