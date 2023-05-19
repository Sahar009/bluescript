import React from "react";
import "./Footer.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
  FaTimes
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          
          <ul>
            <li><a>Register</a></li>
            <li><a>Forum</a></li>
            <li><a>Affiliate</a></li>
            <li><a>FAQ</a></li>
          </ul>
          <h3>© 2021. Foodera. All rights reserved.</h3>
         
        </div>
       
        </div>
      
           
    </section>
  );
};

export default Footer;
