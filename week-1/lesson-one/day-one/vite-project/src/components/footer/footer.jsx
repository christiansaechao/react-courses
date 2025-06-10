import React from "react";
import "./footer.css";

const footerLinks = [ /* ...same as before... */ ];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {footerLinks.slice(0, 2).map((section) => (
          <div key={section.heading} className="footer-column">
            <h4 className="footer-heading">{section.heading}</h4>
            <ul className="footer-list">
              {section.links.map(link => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ flex: 1, display: "flex", flexWrap: "wrap" }}>
          {footerLinks.slice(2).map((section) => (
            <div key={section.heading} className="footer-column">
              <h4 className="footer-heading">{section.heading}</h4>
              <ul className="footer-list">
                {section.links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
        <span>
          <a href="#">Privacy Policy</a>|
          <a href="#">Terms of Use</a>|
          <a href="#">Sales and Refunds</a>|
          <a href="#">Legal</a>|
          <a href="#">Site Map</a>
        </span>
        <span>United States</span>
      </div>
    </footer>
  );
}

export default Footer;
