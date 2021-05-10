import React from "react";
import { Link } from "react-router-dom";

import "./Sos.scss";
import Button from "../../../core/components/Button/Button";



export default function Sos() {

  const contactData = JSON.parse(localStorage.getItem("contactData"));
  console.log(contactData);


  return (
    <div className="Sos">

      {contactData ? 
      <div className="Sos__content">

        <h1>Tu contacto de emergencia: </h1>

        <div className="Sos__main">
          <div className="Sos__spaceDiv">
            <p>
              <span>Nombre: </span>
              {contactData.contactName}
            </p>
            <p>
              <span>Email: </span>
              {contactData.contactEmail}
            </p>
            <p>
              <span>Telefono: </span>
              {contactData.contactMobile}
            </p>
            <p>
              <span>Aseguradora: </span>
              {contactData.insurance}
            </p>
          </div>


          <div className="Sos__buttons">
            <button
              className="Sos__btn Sos__btn--pink"
              name="EMERGENCIA"
            >
              EMERGENCIA
            </button>
            <Link className="Sos__btn" to="/home">
              Volver
            </Link>
          </div>
        </div>

      </div>

      : 
      <h3>Por favor registra un contacto de emergencia</h3>
      }
    </div>
  );
}
