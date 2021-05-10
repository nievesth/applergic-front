import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, EffectFlip } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/effect-fade/effect-fade.scss';


import logo       from '../../../assets/img/Start/logo.png'
import rectangle  from '../../../assets/img/Start/rectangle.png'
import scan       from '../../../assets/img/Start/scan2.png'
import ambulancia from '../../../assets/img/Start/ambulancia.png'
import traduccion from '../../../assets/img/Start/traduccioN.png'
import './OnBoarding.scss';





SwiperCore.use([Navigation, Pagination]);
SwiperCore.use([EffectFlip]);


export default function OnBoarding() {

  const slides = 
    [ {photo : scan, text: "¡Bienvenido a Applergic! Escanea el código de barras de tu producto y Applergic te dirá si es apto para ti" }
    , {photo: rectangle, text:"Lleva tu Diario de compras y actividades" }
    , {photo : ambulancia, text: "En caso de emergencia nos pondremos en contacto con la persona que nos digas."}
    , {photo : traduccion, text : "Viaja a donde quieras. Tendrás a tu disposición un traductor off-line y tu informe de alergias e intolerancias traducidos al idioma local"}
    ];


  const [indexState, setIndex]= useState(0);

  const swiperRef = useRef(null);

  let history = useHistory();

  const next = () => {
    // console.log(swiperRef.current.swiper.activeIndex)
    const i = swiperRef.current.swiper.activeIndex;
    if (i >= 0 && i < slides.length - 1) {
      swiperRef.current.swiper.slideNext();
    } else {
      history.push("/login");
    }
  }

  return (
    <div className="OnBoarding">

      <img className="OnBoarding__logo" src={logo} alt="logo Applergic"></img>

      <div className="OnBoarding__SwiperWrapper">
        <Swiper 
          className="OnBoarding__Swiper"
          ref={swiperRef}
          effect="flip"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={($event) => { 
            // console.log('slide change'); 
            // console.log('on slide' + $event.activeIndex);
            setIndex($event.activeIndex);
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {slides.map((slide, i) => 
            <SwiperSlide key={i} className="OnBoarding__SwiperSlide">
              <img alt="" className="OnBoarding__SwiperSlideImage" src={slide.photo}></img>
              <p className="OnBoarding__SwiperSlideText">{slide.text}</p>
            </SwiperSlide>
          )}

          <div className="swiper-pagination"></div>

        </Swiper>
      </div>

      <div className="OnBoarding__buttonsWrapper">
        <Link to = { '/login' }>
          <button className="OnBoarding__button">Saltar</button>
        </Link>
        <button className="OnBoarding__button" onClick={next}>
          {(indexState === slides.length - 1) ? "Terminar" : "Siguiente ›"}
        </button>
      </div>

    </div>
  )}