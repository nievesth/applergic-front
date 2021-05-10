import React from 'react';
import { Link } from 'react-router-dom';

import ok from '../../../assets/img/Login-Register/ok.png';
import { RegistrationStep } from "../../../core/components/RegistrationStep/RegistrationStep";
import './endRegister.scss';

export default function EndRegister() {

    return (
        <div className="EndRegister">

            <RegistrationStep step={5}/>

            <div className="EndRegister__main">

                <img className="EndRegister__image" src={ok} alt="okey"/>

                <div className="EndRegister__text">
                    <p>Hemos terminado, ya puedes escanear tu primer producto.</p>

                    <Link to="/scan" className="EndRegister__button">Escanea un producto</Link>
                </div>
            </div>
        </div>
    )
}
