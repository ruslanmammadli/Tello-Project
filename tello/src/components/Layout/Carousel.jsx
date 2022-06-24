import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import {images} from '../../lib/Image'

import "swiper/css"

import "swiper/css/pagination";

import { Pagination,Autoplay } from "swiper";


function Carousel() {

  const {Mobile} = images;
    
  const pagination = {
    clickable: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed:1000
  };

  return (
    <div className="back-img">
      <Swiper  
      {...pagination}
      loop={true}
      pagination={pagination}
      className="swiper-header" 
      modules={[Pagination, Autoplay]} 
      spaceBetween={80} 
      >
        <SwiperSlide>
          <div className='content'>
            <p className='text-bold'>Buy & Sell
              <br/>
              What's Now & Next
              <br/>
            </p>
            <span className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </span>
          </div>
          <div className='img-content'>
            <img src={Mobile} alt="logo"/>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='content'>
            <p className='text-bold'>Buy & Sell
              <br/>
              What's Now & Next
              <br/>
            </p>
            <span className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </span>
          </div>
          <div className='img-content'>
            <img src={Mobile} alt="logo"/>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='content'>
            <p className='text-bold'>Buy & Sell
              <br/>
              What's Now & Next
              <br/>
            </p>
            <span className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </span>
          </div>
          <div className='img-content'>
            <img src={Mobile} alt="logo"/>
          </div>
        </SwiperSlide>
      </Swiper>
  </div>
  )
}

export default Carousel