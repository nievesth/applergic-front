import React from "react";
import { Switch, Route } from "react-router-dom";

import Home             from "../../pages/AppHome/Home/Home";
import Diary            from "../../pages/AppHome/Diary/Diary";
import Report           from "../../pages/AppHome/Diary/Report";
import { Scan, ScanQr } from "../../pages/AppHome/Scan/Scan";
import SuccessScan      from "../../pages/AppHome/Scan/SuccessScan";
import Search           from "../../pages/AppHome/Search/Search";
import Sos              from "../../pages/AppHome/Sos/Sos";
import ConfigAllergy    from "../../pages/Login-Register/ConfigAllergy/ConfigAllergy";
import ConfirmAllergy   from "../../pages/Login-Register/ConfirmAllergy/ConfirmAllergy";
import EditCt           from "../../pages/Login-Register/EditCt/EditCt";
import EditProfile      from "../../pages/Login-Register/EditProfile/EditProfile";
import EndRegister      from "../../pages/Login-Register/EndRegister/EndRegister";
import Login            from "../../pages/Login-Register/Login/Login";
import OnBoarding       from "../../pages/Start/OnBoarding/OnBoarding";
import Splash           from "../../pages/Start/Splash/Splash";
import PrivateRoute     from "../../shared/components/PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/diary">
        <Diary></Diary>
      </Route>
      <Route path="/report">
        <Report></Report>
      </Route>
      <Route path="/scanQr">
        <ScanQr></ScanQr>
      </Route>
      <Route path="/scan">
        <Scan></Scan>
      </Route>
      <Route path="/search">
        <Search></Search>
      </Route>
      <Route path="/config-allergy">
        <ConfigAllergy></ConfigAllergy>
      </Route>
      <Route path="/confirm-allergy">
        <ConfirmAllergy></ConfirmAllergy>
      </Route>
      <Route path="/edit-ct">
        <EditCt></EditCt>
      </Route>
      <Route path="/edit-profile">
        <EditProfile></EditProfile>
      </Route>
      <Route path="/end-register">
        <EndRegister></EndRegister>
      </Route>
      <Route path="/on-boarding">
        <OnBoarding></OnBoarding>
      </Route>
      <Route path="/sucess-scan">
        <SuccessScan></SuccessScan>
      </Route>
      <Route path="/sos">
        <Sos></Sos>
      </Route>
      <Route path="/">
        <Splash></Splash>
      </Route>
    </Switch>
  );
}
