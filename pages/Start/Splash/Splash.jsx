
import React from 'react'
import { Link } from 'react-router-dom';

import title from "../../../assets/img/Start/group.png";
import logo  from "../../../assets/img/Start/logoApplergicFigurasGiro.png";
import './splash.scss'




export default function Splash() {


  return (
    <div className="splash__wrapper">
      <Link to = { '/on-boarding/' } className="splash__link">
        <div className = "splash" >
          <img alt="applergic" className="splash__title" src={title}/>
          <img alt="" className="splash__img" src={logo}/>
        </div>
      </Link>
    </div>
)
}
