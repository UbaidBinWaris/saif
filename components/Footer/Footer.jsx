import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.webp";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import dribble from "../../assets/dribble.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="GIXI AI Solutions Company Logo" />
            <p>
              XI<span className="footer-highlight">AI</span>
            </p>
          </div>
          <p className="footer-description">
            Empowering businesses with cutting-edge web solutions, tailored to
            your needs.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-center">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-right">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-socials">
            <Link to="" className="social-icon">
              <img src={facebook} alt="Follow GIXI AI Solutions on Facebook" />
            </Link>
            <Link href="#" className="social-icon">
              <img src={twitter} alt="Follow GIXI AI Solutions on Twitter" />
            </Link>
            <Link href="#" className="social-icon">
              <img src={instagram} alt="Follow GIXI AI Solutions on Instagram" />
            </Link>
            <Link href="#" className="social-icon">
              <img src={dribble} alt="Follow GIXI AI Solutions on Dribbble" />
            </Link>
          </div>

          <h3 style={{marginTop: "20px"}} className="footer-heading">Why Work with us?</h3>
          <p className="footer-description">
            We are growing businesses since 2008 & We take responsibility of your growth.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 GIXI AI Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;