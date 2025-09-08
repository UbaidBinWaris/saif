"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation links array
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`
        flex justify-between items-center 
        px-10 py-1 mx-4 md:mx-24 lg:mx-48 xl:mx-52 mt-5
        rounded-full relative z-10 
        bg-transparent backdrop-blur-sm
        shadow-[0_4px_12px_rgba(255,255,255,0.4)]
        transition-brand-all
        ${scrolled ? "bg-black/20" : ""}
      `}>
        <div className="flex items-center">
          <Image 
            src="/logo.webp" 
            alt="GIXI AI Solutions Navigation Logo" 
            width={50}
            height={50}
            className="h-10 md:h-12 w-auto mr-0"
          />
          <p className="hidden text-brand-primary mt-0 text-xl md:text-2xl font-semibold">
            GIXI<span className="text-brand-secondary">AI</span> 
          </p>
        </div>

        {/* Primary Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 mt-0">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="
                text-brand-primary font-medium text-lg lg:text-xl 
                relative transition-brand-all
                hover:text-brand-secondary
                after:content-[''] after:absolute after:left-1/2 after:-bottom-0.5 
                after:w-0 after:h-0.5 after:bg-brand-secondary
                after:transition-all after:duration-300 after:-translate-x-1/2
                hover:after:w-full
                text-shadow-glow text-shadow-glow-hover
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div
          className={`
            md:hidden flex flex-col gap-1.5 cursor-pointer ml-6 mt-0 z-50
            transition-transform duration-300
          `}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`
            w-7 h-0.5 bg-white rounded-sm transition-all duration-300
            ${menuOpen ? 'rotate-45 translate-y-2' : ''}
          `} />
          <div className={`
            w-7 h-0.5 bg-white rounded-sm transition-all duration-300
            ${menuOpen ? 'opacity-0' : ''}
          `} />
          <div className={`
            w-7 h-0.5 bg-white rounded-sm transition-all duration-300
            ${menuOpen ? '-rotate-45 -translate-y-2' : ''}
          `} />
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="
            md:hidden flex flex-col
            absolute top-20 right-4 sm:right-0
            bg-gray-900 p-6 sm:p-10
            rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.6)]
            z-50 w-[calc(100%-2rem)] sm:w-full
            sm:top-0 sm:h-screen
          ">
            {navLinks.map((link, index) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setMenuOpen(false)}
                className={`
                  text-brand-primary text-lg font-medium
                  transition-brand-all hover:text-brand-secondary
                  hover:translate-x-1
                  ${index < navLinks.length - 1 ? 'mb-4' : ''}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;