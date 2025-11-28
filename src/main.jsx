import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Import all global styles here
import "./styles/layout.css";
import "./styles/style.css";
import "./styles/about.css";
import "./styles/blog-list.css";
import "./styles/contact.css";
import "./styles/pricing.css";
import "./styles/services.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);