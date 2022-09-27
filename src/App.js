import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./navfootercomponent/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./css/App.css";
import Footer from "./navfootercomponent/Footer";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setLoading(false);
    }, 1000);
  }
  return (
    !loading && (
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </main>
    )
  );
}

export default App;
