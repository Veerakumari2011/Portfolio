import "./Footer.css";
import React from "react";
import { FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" >
      <div className="footer-container">
        {/* Contact Info */}
        <div className="contact-info1">
          <h4>
            <FaPhone size={18} className="icon" /> 8946013032
          </h4>
          </div>
          <div className="contact-info2">
          <h4>
            <FaMailBulk size={18} className="icon" /> Veerakumari.sri@gmail.com
          </h4>
        </div>

        {/* Social Media Section */}
        <h4>Connect with us:</h4>
        <div className="social">
          <a href="https://www.linkedin.com/in/veerakumari-loganathan-201722359/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} className="icon" />
          </a>
          <a href="mailto:Veerakumari.sri@gmail.com">
            <FaMailBulk size={25} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
