import React from "react";
import { Link } from 'react-router-dom';
import './Footer.scss';

import red      from '../../../../assets/img/AppHome/red.png'; 
import home     from '../../../../assets/img/AppHome/homeAzul.png';
import favorito from '../../../../assets/img/AppHome/favorito.png';
import diario   from '../../../../assets/img/AppHome/diario.png';

 
export default function Footer() {
    
    return (
        <div className="Footer">

            <Link className="Footer__button" to={ '/home' }>
                <img src={home} alt="" /> 
            </Link>
            
            <Link className="Footer__button" to={ '/home' }>
                <img src={favorito} alt="" />
            </Link>

            <Link className="Footer__button" to={ '/diary' }>
                <img src={diario} alt="" />
            </Link>

            <Link className="Footer__button" to={ '/home' }>
                <img src={red} alt="" />
            </Link>

        </div>
    );
}