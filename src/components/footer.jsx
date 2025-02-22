import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <div className="wrapper">
              <span className="span">Add:</span>
              <address className="address">Mumbai</address>
            </div>
            <div className="wrapper">
              <span className="span">Call:</span>
              <a href="tel:+011234567890" className="footer-link">+91 9145147812</a>
            </div>
            <div className="wrapper">
              <span className="span">Email:</span>
              <a href="mailto:info@SkillBuddy.com" className="footer-link">info@Courses.com</a>
            </div>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link">About</a>
            </li>
            <li>
              <a href="#" className="footer-link">Courses</a>
            </li>
            <li>
              <a href="#" className="footer-link">Press</a>
            </li>
            <li>
              <a href="#" className="footer-link">Blog</a>
            </li>
            <li>
              <a href="#" className="footer-link">Affiliate Program</a>
            </li>
            <li>
              <a href="#" className="footer-link">Partnerships</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <a href="#" className="footer-link">Help Center</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contact Us</a>
            </li>
            <li>
              <a href="#" className="footer-link">FAQs</a>
            </li>
            <li>
              <a href="#" className="footer-link">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="footer-link">Privacy Policy</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Follow Us</p>
            </li>
            <li>
              <a href="#" className="footer-link">Facebook</a>
            </li>
            <li>
              <a href="#" className="footer-link">Twitter</a>
            </li>
            <li>
              <a href="#" className="footer-link">Instagram</a>
            </li>
            <li>
              <a href="#" className="footer-link">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 CollgePortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}