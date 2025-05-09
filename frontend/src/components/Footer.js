import React from 'react';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css'; // Import the CSS file for styles

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left: Social links with icons */}
        <div className="social-links">
          <strong>Follow Us: </strong>{' '}
          <a
            href="https://www.facebook.com/profile.php?id=61574982405238" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />
          </a>
          <a
            href="https://instagram.com/empowerhersoft"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            >
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </a>
          <a
            href="https://www.linkedin.com/company/empower-her-soft/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="linkedin-icon" />
          </a>
        </div>

        {/* Right: Legal links and Copyright (on the same line) */}
        <div className="legal-links">
          <a href="/privacy-policy" className="legal-link">
            Privacy Policy
          </a>
          <span className="separator">|</span>
          <a href="/terms-and-conditions" className="legal-link">
            Terms & Conditions
          </a>
          <p className="copyright">
            Copyright © Empower Her Soft. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
