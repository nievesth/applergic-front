import React from "react";
import ReactToPdf from "react-to-pdf";
import Button from "../../../core/components/Button/Button";

import DiaryProducts from "./DiaryProducts";
import { Link } from "react-router-dom";

export default function Report() {
  const showIt = false;

  const profileData = JSON.parse(localStorage.getItem("profileData"));
  console.log(profileData);

  const userAllergies = JSON.parse(localStorage.getItem("userAllergies"));
  console.log(JSON.stringify(userAllergies));

  var f = new Date();
  function currentMonth() {
    const month = f.getMonth() + 1;
    console.log(month);
    if (month == 1) {
      return "Enero";
    } else if (month == 2) {
      return "Febrero";
    } else if (month == 3) {
      return "Marzo";
    } else if (month == 4) {
      return "Abril";
    } else if (month == 5) {
      return "Mayo";
    } else if (month == 6) {
      return "Junio";
    } else if (month == 7) {
      return "Julio";
    } else if (month == 8) {
      return "Agosto";
    } else if (month == 9) {
      return "Septiembre";
    } else if (month == 10) {
      return "Octubre";
    } else if (month == 11) {
      return "Noviembre";
    } else if (month == 12) {
      return "Diciembre";
    }
  }
  const month = f.getMonth() + 1;
  return (
    <ReactToPdf filename="informe-diario.pdf">
      {({ toPdf, targetRef }) => (
        <div ref={targetRef}>
          <div className="diary">
            <h1 className="diary__title">
              Este es el informe basado en tu diario.
            </h1>
            <p>
              Actividad del mes de {currentMonth() + " de " + f.getFullYear()}
            </p>
            <p>Nombre: {profileData.name} </p>
            <p className="diary__allergies">
              Alergico a:
              {userAllergies.map((allergy) => " " + allergy.name + " ")}.
            </p>
            <p className="diary__date">
              Fecha:{" "}
              {f.getDay() + " " + currentMonth() + " de " + f.getFullYear()}{" "}
            </p>
            <p className="diary__date">
              Nuevos productos Incluidos en tu diario
            </p>
            <DiaryProducts></DiaryProducts>
            <div className="botonGenerarInforme">
              <Button name="Generar PDF" onClick={toPdf}>
                Guardar PDF
              </Button>
            </div>
            <div className="botonGuardarDiario">
              <Link to="/diary">
                <Button name="Volver"></Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </ReactToPdf>
  );
}
