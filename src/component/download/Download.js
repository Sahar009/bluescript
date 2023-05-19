import React from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import AVTR1 from '../asset/image1.jpg'
import AVTR2 from '../asset/img2.jpg'
import AVTR3 from '../asset/img2.jpg'

import "swiper/css";
import "swiper/css/pagination";


const data = [
  {
    avatar:AVTR1,
    name: 'Thamas Muller - webdeveloper',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus '
  },
  {
    avatar:AVTR2,
    name: 'Bamgboye Muller - webdeveloper',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus '
  },
  {
    avatar:AVTR3,
    name: 'Bluescript TECH',
    review: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus "
  },
  
]

const Download = () => {
  
  return (
    <section id="download">
      <div className="container download" >
      <div className="floating-icon">
        <a >
        <h1 className="text">Site still in Progress </h1>
        </a>
      </div>
        
      </div>
      <div className="container download" >
      <section id='testimonials'>
      
      <h1>Testimonials</h1>
      <Swiper className='container testimonials_container' 
      pagination={{ clickable: true }} 
      
      slidesPerView={1} 
      spaceBetween={40}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar} alt={name}  />   
          </div>
          
          <p className='client_review'>
                {review}        
          </p>
          <h3 className='client_name'>{name}</h3>

        </SwiperSlide>
            )
          })
        }

        </Swiper> 
    </section>
        
      </div>
    </section>
  );
};

export default Download;
