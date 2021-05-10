
import React , { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';

import food from '../../../assets/img/Login-Register/image.png';
import logo from '../../../assets/img/Start/logo.png';
import { API } from '../../../shared/consts/api.const';
import { IsLoggedContext } from '../../../shared/contexts/IsLoggedContext';
import './Login.scss';




export default function Login() {

    const history = useHistory();

    const { register, handleSubmit, errors, reset } = useForm();

    const {setIsLogged} = useContext(IsLoggedContext);

    function onSubmit (formData) {
        API.post('login', formData).then(res => {
            document.cookie = 'token=' + res.data.token;
            document.cookie = 'user=' +  JSON.stringify(res.data.user);
            setIsLogged(true);
            history.push('/home');
            reset();
        })
    }

    return (
        <div className="login">

            <div className="login__hero">
                <img className="login__heroImg" alt="" src={food}/>
                <img className="login__heroLogo" alt="" src={logo}/>
            </div>

            <div className="login__main">
                <div className="login__text">
                    <h2>¡Bienvenido de nuevo!</h2>
                    <p>Por favor, introduce tus datos para continuar.</p>
                </div>

                <form className="login__form" onSubmit={handleSubmit(onSubmit)}>

                    <label className="login__input" htmlFor="email">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Dirección email" 
                            ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                        />
                        {errors.email && <span className="login__error">El campo email es obligatorio</span> }
                    </label>
                    

                    <label className="login__input" htmlFor="password">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            ref={register({ required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}
                        />
                        {errors.password && <span className="login__error">El campo contraseña es obligatorio</span> }
                    </label>
                    

                    <Link className="login__recoverPassword" to="/">¿Olvidaste tu contraseña?</Link>


                    <input className="login__submitButton" type="submit" value="Entrar"/>

                </form>


                <div className="login__footer">
                    <span >¿nuevo en Applergic?</span>
                    <Link className="login__registerLink" to="/edit-profile">Crea tu cuenta aquí</Link>
                    <Link className="login__laterLink" to="/config-allergy">Me registraré en otro momento</Link>
                </div>
            </div>
        </div>
    )
}
