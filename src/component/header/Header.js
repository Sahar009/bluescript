import React  from "react";
import "./Header.css";
import {BsFillBasketFill} from 'react-icons/bs'
import "../UI/Button/Button.css";
import headerbg1 from "../asset/headerbg3.png";


const Header = () => {
  
  
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left">
          <h1>
            <span>Good food choices are good investments.</span>
            
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
          </p>
         
            <button className="btn1" href={"#"} >Order Now <BsFillBasketFill/></button>
            <button className="btn2"  href={"#"}>Learn More</button>
          
        </div>
        <div className="header-right" >
       
          <img className="header-img" src={headerbg1}/>
          
        </div>
      </div>
   
    </section>
  );
};

export default Header;
