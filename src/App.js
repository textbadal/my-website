// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CertificateVerification from './pages/CertificateVerification';
import Contact from './pages/Contact';
import Footer from './components/Footer';
// src/index.js or src/App.js
import './styles/main.css';  // Ensure this path is correct based on your folder structure

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/verify-certificate" element={<CertificateVerification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
