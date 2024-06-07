import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import icon1 from '../images/icon1.jpg';
import icon2 from '../images/icon2.png';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/indianexpress"><FontAwesomeIcon icon={faFacebook} className="social-icon facebook" /></a>
        <a href="https://twitter.com/indianexpress"><FontAwesomeIcon icon={faTwitter} className="social-icon twitter" /></a>
        <a href="https://www.linkedin.com/company/indian-express/"><FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" /></a>
        <a href="https://www.instagram.com/indianexpress/"><FontAwesomeIcon icon={faInstagram} className="social-icon instagram" /></a>
        <a href="http://www.youtube.com/@indianexpress"><FontAwesomeIcon icon={faYoutube} className="social-icon youtube" /></a>
      </div>
      <div className="contact-details">
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a href="mailto:feedback@indianexpress.com ">feedback@indianexpress.com </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <a href="tel:+1234567890">+91 9876543201</a>
        </div>
      </div>
      <div className="app-buttons">
      <div className="app-buttons">
        <a href="https://play.google.com/store/apps/details?id=com.indianexpress.android&hl=en"><img src={icon1} alt="Get it on Play Store" /></a>
        <a href="https://itunes.apple.com/us/app/the-indian-express/id506351833?mt=8"><img src={icon2} alt="Get it on App Store" /></a>
      </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} News Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
