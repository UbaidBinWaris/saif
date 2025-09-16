'use client'
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Nav.css";
import { PATHS } from "../../constants/assetPaths";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Memoized scroll handler to prevent recreation on every render
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);
  }, []);

  // Memoized menu toggle handler
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  // Memoized menu close handler
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window === 'undefined') return;

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [handleScroll]);

  // Memoized navigation links to prevent recreation
  const navigationLinks = useMemo(() => [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" }
  ], []);

  // Memoized logo image props
  const logoProps = useMemo(() => ({
    src: PATHS.LOGOS.MAIN,
    alt: "GIXI AI Solutions Navigation Logo",
    className: "logo-image",
    width: 200,
    height: 200,
    style: { 
      margin: 0,
      padding: 0,
      objectFit: 'contain',
    },
    priority: true, // Since it's above the fold
    sizes: "(max-width: 480px) 16px, (max-width: 768px) 20px, (max-width: 1024px) 24px, 28px"
  }), []);

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Image {...logoProps} />
        <p>
          {/* xi<span className="webSpan">Ai</span>  */}
        </p>
      </div>

      {/* Primary Navigation */}
      <nav className="primary-nav">
        {navigationLinks.map(({ href, label }) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle mobile menu"
        aria-expanded={menuOpen}
      >
        <div />
        <div />
        <div />
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-nav">
          {navigationLinks.map(({ href, label }) => (
            <Link key={`mobile-${href}`} href={href} onClick={closeMenu}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Nav;