import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SiteJsonLd from "./components/SiteJsonLd";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const BlogList = React.lazy(() => import("./pages/BlogList"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const Services = React.lazy(() => import("./pages/Services"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      Loading…
    </div>
  );
}

// Optional: Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <SiteJsonLd />
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}