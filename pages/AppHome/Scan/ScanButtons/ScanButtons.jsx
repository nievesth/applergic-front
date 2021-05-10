import React from 'react'
import { NavLink } from 'react-router-dom';

import './ScanButtons.scss';



export default function ScanButtons() {
    
  return (

    <div className="ScanButtons">

      <NavLink 
        exact={true}
        to={"/scan"}
        className="ScanButtons__btn"
        activeClassName="ScanButtons__btn--active"
      >
        <div className="ScanButtons__image ScanButtons__image--barcode"></div>
        <p className="ScanButtons__text">Código de barras</p>
      </NavLink>

      <NavLink 
        exact={true}
        to={"/scanQr"}
        className="ScanButtons__btn"
        activeClassName="ScanButtons__btn--active"
      >
        <div className="ScanButtons__image ScanButtons__image--qr"></div>
        <p className="ScanButtons__text">Código QR</p>
      </NavLink>

    </div>
  )
}
