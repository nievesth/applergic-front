import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';


import Button from '../../../core/components/Button/Button';
import { RegistrationStep } from "../../../core/components/RegistrationStep/RegistrationStep";
import { API } from '../../../shared/consts/api.const';
import { AllergyGallery } from './AllergyGallery/AllergyGallery';
import { AllergyButton } from './AllergyButton/AllergyButton';
import './configAllergy.scss';


export default function ConfigAllergy(props) {

    //useHistory para redirigir a otras paginas
    const history = useHistory();

    //vble de estado para guardar las alergias seleccionadas por el usuario
    const [userAllergies, setUserAllergies] = useState([]);

    //vable de estado para guardar las alergias llamadas desde la API
    const [allergies, setAllergies] = useState([]);

    //Llamada al back para pintar las alergias (bbdd)
    const getAllergies = () => {

        API.get('/allergies').then((res) => {
            console.log(res);
            setAllergies(res.data);
        });
    }

    //useEffect para llamar a la API una sola vez
    useEffect(getAllergies, []);

    //funcion para hacer scroll en la pantalla segun la letra pulsada
    function scrollTo(letter) {
        document.getElementById(letter).scrollIntoView();
    }

    //funcion para guardar las alergias seleccionadas por el usuario
    function saveUserAllergy(item, selected) {

        if (selected) {

            //si selected es true guardaremos las alergias (item) en la vble de estado userAllergies
            setUserAllergies([...userAllergies, item]);

        } else {

            //si deseleccionamos la alergia, hacemos una copia del array anterior y eliminamos con splice el item deseleccionado (con su index)
            const index = userAllergies.indexOf(item);
            const newUserAllergies = userAllergies;
            newUserAllergies.splice(index, 1);
            setUserAllergies(newUserAllergies);
        }
    }


    function toggleRoundButtons(event, letter) {
        const options = 
            document
            .querySelector(".configAllergy__options")
            .querySelectorAll(".AllergyButton")
        const optionsButton = 
            [...options].filter(btn => btn.innerText === letter)[0]
        
        const gallery = document.querySelector(`#${letter}`);
        const galleryButton = gallery.firstChild;
        const galleryAllergyButtons = gallery.querySelector(".configAllergy__allergyButtons").childNodes;


        let selectedAllergies = [];

        for (const btn of galleryAllergyButtons) {
            if (btn.classList.contains("AllergyButton--selected")) {
                selectedAllergies.push(btn);
            }
        }


        if (selectedAllergies.length === 0) {
            optionsButton.classList.add("AllergyButton--selected");
            galleryButton.classList.add("AllergyButton--selected");
        } else if (selectedAllergies.length === 1 && selectedAllergies[0] === event.target) {
            optionsButton.classList.remove("AllergyButton--selected");
            galleryButton.classList.remove("AllergyButton--selected");
        }

    }

    //funcion para pasar las alergias seleccionadas a la siguiente pagina (localStorage + useHistory) 
    function goToConfirm() {

        localStorage.setItem('userAllergies', JSON.stringify(userAllergies));
        history.push('/confirm-allergy');
    }

    return (
        <div className="configAllergy">

            <RegistrationStep step={3}/>

            <div className="configAllergy__text">
                <h2>Ahora selecciona tus alergias e intolerancias.</h2>
                <p>Los elementos marcados serán identificados en tus busquedas como peligrosos para ti.</p>
            </div>
           
            <main className="configAllergy__main">
            <div className="configAllergy__options">

                {/* Componente allergyButton con las letras de cada bloque de alergias */}

                {/* object keys devuelve las propiedades de allergies (letter y name) */}
                {Object.keys(allergies).map((letter, i) => {

                    {/* Hacer un boton por cada item (letra) del array y pasar la funcion scrollTo en un evento onClick */ }
                    return (

                        <div key={i} className="configAllergy__selector">
                            <AllergyButton 
                              round={true} 
                              onClick={() => scrollTo(letter)}
                            >
                              {letter}
                            </AllergyButton>
                        </div>
                    )

                })}

            </div>

            {/* Componente allergyGallery con los bloque de alergias */}
            <div className="configAllergy__allergiesWrapper">
            <div className="configAllergy__allergies">

                {/* Hacer otra vez object keys */}
                {Object.keys(allergies).map((letter) => {

                    /* A cada div de bloque de alergias le ponemos una key e id de letter para que funcione el scroll; 
                    a la allergy gallery le pasamos el array de alergias para pintar un boton con su nombre en cada vuelta */
                    return (

                        <div key={letter} id={letter} className="configAllergy__allergyBlock">

                            <AllergyButton round={true} onClick={() => scrollTo(letter)}>{letter}</AllergyButton>

                            <AllergyGallery 
                              allergyList={allergies[letter]} 
                              onClick={(item, selected) => saveUserAllergy(item, selected)} 
                              fnToggleRoundButtons={(event) => toggleRoundButtons(event, letter)}
                            />

                        </div>
                    )

                })}

            </div>

                <Button name='Guardar' onClick={goToConfirm} ></Button>

            </div>
            </main>
        </div>
    )
}