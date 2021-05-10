import React from "react";
import { Link } from "react-router-dom";

import "./SuccessScan.scss";


export default function SuccessScan() {

  return (
    <div className="SuccessScan">

      <h3>¡Tu producto se ha escaneado con éxito!</h3>

      <div className="SuccessScan__buttons">
        <Link className="SuccessScan__btn SuccessScan__btn--pink" to="/diary">
          Ir a mi diario
        </Link>
        <Link className="SuccessScan__btn" to="/scan">
          Volver a escanear
        </Link>
        <Link className="SuccessScan__btn SuccessScan__btn--gray" to="/home">
          Home
        </Link>
      </div>

    </div>
  );
}
