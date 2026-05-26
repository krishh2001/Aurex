import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Import all global styles here
import "./styles/layout.css";
import "./styles/page-loader.css";
import "./styles/home.css";
import "./styles/premium-icons.css";
import "./styles/about.css";
import "./styles/blog-list.css";
import "./styles/contact.css";
import "./styles/faq.css";
import "./styles/pricing.css";
import "./styles/careers.css";
import "./styles/chat-widget.css";
import "./styles/services.css";
import "./styles/portfolio.css";
import "./styles/service-cards.css";
import "./styles/blogpost.css";
import "./styles/cta.css";
import "./styles/performance.css";
import "./styles/typography.css";
import "./styles/utility.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);