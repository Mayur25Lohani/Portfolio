import React, {useEffect} from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/Fiery Infinity with Peacock Feather.jpg'

import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Sanders Cook',
    review : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate incidunt deserunt cum sequi, odit temporibus reprehenderit dicta veniam a earum totam tempora assumenda optio, hic modi ab in voluptates natus.'
  },

  {
    avatar: AVTR1,
    name: 'Lana Ray',
    review : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate incidunt deserunt cum sequi, odit temporibus reprehenderit dicta veniam a earum totam tempora assumenda optio, hic modi ab in voluptates natus.'
  },

  {
    avatar: AVTR1,
    name: 'Sophia Marie',
    review : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate incidunt deserunt cum sequi, odit temporibus reprehenderit dicta veniam a earum totam tempora assumenda optio, hic modi ab in voluptates natus.'
  },

  {
    avatar: AVTR1,
    name: 'Lisa Hill',
    review : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate incidunt deserunt cum sequi, odit temporibus reprehenderit dicta veniam a earum totam tempora assumenda optio, hic modi ab in voluptates natus.'
  },

]
const Testimonials = () => {

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);


  return (
    <section id='testimonials' className='reveal fade-left'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonials