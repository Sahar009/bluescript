import React from 'react'
import './page3.css'
import page3 from '../asset/page3.png';
import {ImCheckmark} from 'react-icons/im'


const Page3 = () => {
  return (
    <div><div className="container header">
    <div className="header-left">
      <h1>
        <span>We make everything by hand with the best possible ingredients.</span>
        
      </h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
    <p><ImCheckmark color='rgb(172, 46, 67)'/>  Etiam sed dolor ac diam volutpat.</p>
    <p><ImCheckmark color='rgb(172, 46, 67)'/>  Etiam sed dolor ac diam volutpat.</p>
    <p><ImCheckmark color='rgb(172, 46, 67)'/>  Etiam sed dolor ac diam volutpat.</p>
     
        <button className="btn1" href={"#"} >Learn More</button>
        
      
    </div>
    <div className="header-right" >
   
      <img className="header-img" src={page3}/>
      
    </div>
  </div></div>
  )
}

export default Page3