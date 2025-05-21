import React from "react";
import "./PrivacyPolicy.css";
import logo from "../../assets/logo.webp";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-section">
      <div className="privacy-container">
        <header className="privacy-header">
          <img src={logo} alt="GIXI AI Solutions Logo" className="privacy-logo" width={60} height={60} />
          <h1>Privacy Policy</h1>
          <p className="privacy-subheading">Your privacy is important to us</p>
        </header>
        <main className="privacy-content">
          <section>
            <h2>1. Introduction</h2>
            <p>GIXI AI Solutions ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
          </section>
          <section>
            <h2>2. Information We Collect</h2>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide via forms.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, browser type, and device information.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience and analyze site traffic.</li>
            </ul>
          </section>
          <section>
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and provide services</li>
              <li>To improve our website and offerings</li>
              <li>To communicate updates, offers, or important information</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
          </section>
          <section>
            <h2>5. Third-Party Services</h2>
            <p>We may use third-party tools (such as analytics or payment processors). These providers have their own privacy policies, and we encourage you to review them.</p>
          </section>
          <section>
            <h2>6. Your Rights</h2>
            <ul>
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request information about how your data is used</li>
            </ul>
          </section>
          <section>
            <h2>7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          </section>
          <section>
            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a style={{ color: "#6cf", textDecoration: "none" }} href="/contact">Contact Us</a>.</p>
          </section>
        </main>
        <footer className="privacy-footer">
          <a href="/" className="privacy-link">Home</a> |
          <a href="/contact" className="privacy-link">Contact</a>
          <p className="privacy-copyright">&copy; 2025 GIXI AI Solutions. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
