import React, { useState } from 'react';
import './allergyButton.scss';

export function AllergyButton(props) {

    //vble estado para ver si los botones de alergias estan o no seleccionados
    const [selected, setSelected] = useState(false);

    //condicional terciario para establecer clases si el boton esta o no seleccionado
    const buttonClass = 
      "AllergyButton" 
      + (props.round ? " AllergyButton--round " : " AllergyButton--small ")
      + (selected ? " AllergyButton--selected " : "");

    //funcion para introducir mas tarde en el array alergias seleccionadas o no
    function selectAllergy(event) {
        props.onClick(event, !selected);
        if (buttonClass.includes("AllergyButton--small")) {
            setSelected(!selected);
        }
    }



    return (

        //boton con clase segun el condicional y evento on click para seleccionar o no alergias
        //PROPS CHILDREN => Permite crear un componente generico que podra ser modificado por el padre cuando usamos este componente en el
        
        <button className={buttonClass} onClick={selectAllergy}>{props.children}</button>
        
    )

}