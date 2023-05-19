import React from "react";
import "./Subscribe2.css";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";



const Subscribe2 = () => {
  
  return (
    <section id="subscribe2">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Hurry up! Subscribe our newsletter
        and get 25% Off</h2>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Enter Address Here..." />
            <button><a className="buttonlink" href="mailto:akinwumisehinde@gmail.com">Subscribe</a></button>
          </div>
        </form>
        
        
      </div>
    </section>
  );
};

export default Subscribe2;
