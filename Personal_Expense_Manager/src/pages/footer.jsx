import React from 'react';
import './Footer.css'; // You can customize the CSS file as per your design.

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
