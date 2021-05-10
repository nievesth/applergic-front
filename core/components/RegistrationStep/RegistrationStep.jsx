

import { React } from "react";
import { Link  } from "react-router-dom";

import "./_RegistrationStep.scss";



export function RegistrationStep(props) {

  let goBackRoute = "/";

  switch (props.step) {
    case 1:
      goBackRoute = "/login";
      break;
    case 2:
      goBackRoute = "/edit-profile";
      break;
    case 3:
      goBackRoute = "/edit-ct";
      break;
    case 4:
      goBackRoute = "/config-allergy";
      break;
    case 5:
      goBackRoute = "/confirm-allergy"
      break;
    default:
      break;
  }

  return (
    <div className="RegistrationStep">
      <Link className="RegistrationStep__goBackLink" to={goBackRoute}>‹ Volver</Link>
      <span>{props.step} de 5</span>
    </div>
  )
}