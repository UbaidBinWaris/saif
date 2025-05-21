import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.webp";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="GIXI AI Solutions Navigation Logo" className="" loading="lazy" />
        <p>
          GIXI<span className="webSpan">AI</span> 
        </p>
      </div>

      {/* Primary Navigation */}
      <nav className="primary-nav">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div />
        <div />
        <div />
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
};

export default Nav;