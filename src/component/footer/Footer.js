import React from "react";
import "./Footer.css";
import {AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'


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
          <div className="footer-others">
          <BsFacebook size={40}/>
          <AiFillTwitterCircle size={40}/>
         < AiFillInstagram size={40}/>
          <h3>© 2023. Akinwumi Sehinde. All rights reserved.</h3>
          </div>
         
        </div>
       
        </div>
      
           
    </section>
  );
};

export default Footer;
