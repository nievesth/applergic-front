import React from "react";
import Footer from "./Footer/Footer";
import { Nav } from "./Nav/Nav";

import logoApplergic from "../../../assets/img/AppHome/logoApplergicFinal.png";
import { Link } from "react-router-dom";
import { BiBarcode, BiSearch, BiBuoy } from "react-icons/bi";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">

      <Nav />

      <div className="Home__body">

        <div className="Home__logoApplergic">
          <img alt="applergic logo" src={logoApplergic}></img>
        </div>

        <div className="Home__main">
          <div className="Home__buttonWrapper">
            <Link className="Home__button" to="/scan">
              <BiBarcode />
              <span>Escaner</span>
            </Link>
            <p className="Home__buttonText">
              Escanea un nuevo producto
            </p>
          </div>

          <div className="Home__buttonWrapper">
            <Link className="Home__button Home__button--gray" to="/search">
              <BiSearch />
              <span>Buscar</span>
            </Link>
            <p className="Home__buttonText">
              Busca un comercio o restaurante para ti
            </p>
          </div>

          <div className="Home__buttonWrapper">
            <Link className="Home__button Home__button--pink" to="/sos">
              <BiBuoy />
              <span>S.O.S</span>
            </Link>
            <p className="Home__buttonText">
              ¿Necesitas ayuda urgente? contactamos con emergencias.
            </p>
          </div>
        </div>

      </div>
        
      <Footer />

    </div>
  );
}
