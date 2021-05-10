import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import camera from "../../../assets/img/Login-Register/cMaraAzul.png";
import { RegistrationStep } from "../../../core/components/RegistrationStep/RegistrationStep";
import "./editProfile.scss";





export default function EditProfile() {
  const history = useHistory();
  const [hayFoto, setHayFoto] = useState(false);
  const [profileImg, setProfileImg] = useState(camera);


  const { register, handleSubmit, errors, reset } = useForm();

  function imageHandler(event) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setHayFoto(true);
        setProfileImg(reader.result);
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0]);
    }
  }

  function onSubmit(profileData) {
    localStorage.setItem("profileData", JSON.stringify(profileData));
    console.log("profiledata ok");
    history.push("/edit-ct");
  }


  return (
    <div className="register">

      <RegistrationStep step={1}/>

      <h2>Dinos quien eres.</h2>

      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>

        <label 
          className={"register__photo " + (hayFoto ? "register__photo--uploaded" : "register__photo--upload")}
          >
          <figure>
            <img src={profileImg} alt="camera" />
            <figcaption>Subir Foto</figcaption>
          </figure>
          <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              name="photo"
              onChange={imageHandler}
            />
        </label>

        <div className="register__textInputs">
          <label className="register__input" htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              ref={register({ required: true })}
            />
            {errors.name && (
            <span className="register__error">Campo obligatorio</span>
            )}
          </label>
          <label className="register__input" htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Dirección email"
              ref={register({
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.email && (
              <span className="register__error">
                Campo obligatorio, debe ser un email válido
              </span>
            )}
          </label>
          <label className="register__input" htmlFor="mobile">
            <input
              type="text"
              name="mobile"
              placeholder="Móvil"
              ref={register({ required: true })}
            />
            {errors.mobile && (
              <span className="register__error">Campo obligatorio</span>
            )}
          </label>
          <label className="register__input" htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              ref={register({
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
            />
            {errors.password && (
              <span className="register__error">
                Campo obligatorio; 
                debe tener una longitud mínima de 8 caracteres, 
                y debe contener al menos una
                mayúscula, minúscula y un número.
              </span>
            )}
          </label>
          <input 
            className="register__submitButton"
            type="submit"
            value="Guardar perfil"
          />
        </div>

      </form>

    </div>
  )
  }
