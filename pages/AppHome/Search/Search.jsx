import * as React from "react";
import { useState } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";
import { Link } from "react-router-dom";
import "./Search.scss";

export default function Search() {
  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 40.458427246045765,
    longitude: -3.694969159387752,
    zoom: 14,
  });

  console.log(viewport);

  return (
    <div>
      <div className="overMap">
        <input placeholder="Buscar..."></input>
      </div>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        onViewportChange={setViewport}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
      </ReactMapGL>
      <Link to="/home">
        <button className="returnMap">Volver</button>
      </Link>
    </div>
  );
}
