import './my-work.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import countries from '../components/media/projects/countries.png'
import ipAdress from '../components/media/projects/apiAdress.png'

import landingPage from '../components/media/projects/landingPage.png'

function Mywork() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className='mywork'>
      <h3>Meu trabalho</h3>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><div className='content'><img src={countries} /> <div><h3>Countries API</h3>
        </div></div>
        </SwiperSlide>
        <SwiperSlide><div className='content'><img src={ipAdress} /> <div><h3>IP adress tracker</h3>
        </div></div></SwiperSlide>
        <SwiperSlide><div className='content'><img src={landingPage} /> <div><h3>Huddle landing page</h3>
        </div></div></SwiperSlide>
    
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
}

export default Mywork;