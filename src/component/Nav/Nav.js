import React, { useState,useEffect } from 'react'
import './Nav.css';
import {AiOutlineBars} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'
import Button from '../UI/Button/Button';
import logo from '../asset/logo2.png'
import logo2 from '../asset/logo2.JPG'


const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (<>
  <nav className="navbar container">
  <div className="logo">
    <img src={logo} />
  </div>
  <ul>
  <li className="nav-btn">
            <Button text={"Contact Us"} btnClass={"btn-dark"} href={"#faq"} />
          </li>
    </ul>
 
</nav>
<nav className="navbar2 container">
  <div className="logo">
    <img src={logo2} />
    <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href='/'>Home</a>
          </li>
          
          <li>
            <a href="#features">About Us</a>
          </li>
          
          <li>
            <a href="#subscribe">Explore Foods</a>
          </li>
          <li>
            <a href="#subscribe">Reviews</a>
          </li>
          <li>
            <a href="#subscribe">FAQ</a>
          </li>
          <button className='btn-dark'>
          <li className='btn-text'>1800789123</li>
         
          </button>



         
          </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
  </div>
  
 
</nav>
</>
  )
}

export default Nav