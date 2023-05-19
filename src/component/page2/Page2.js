import React from 'react'
import headerbg1 from '../asset/page2img.png'
import './page2.css'

const Page2 = () => {
  return (
    <section id="page">
    <div className="container page">
   
      <div className="page-left" >
     
        <img src={headerbg1}/>
        
      </div>
      <div className="page-right">
        <h1>
          <span>We pride ourselves on making real food from the best ingredients.</span>
          
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
        </p>
       
          <button className="btn1" href={"#"} >Learn More </button>

        
      </div>
    </div>
 
  </section>
  )
}

export default Page2