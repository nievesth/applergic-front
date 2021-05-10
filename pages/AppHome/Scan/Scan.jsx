import React from 'react'
import { Link } from 'react-router-dom';

import './Scan.scss';
import { BarcodeScanner } from './ScanCode/BarcodeScanner';
import Test from "./ScanQr/QrClass";
import ScanButtons from "./ScanButtons/ScanButtons";




function ScanTemplate(scanType) {

    let scanText = "ERROR";
    let scanner = <error>ERROR</error>;

    switch (scanType) {
        case "barcode":
            scanText = "código de barras"; 
            scanner  = <BarcodeScanner/>
            break;
        case "qr":
            scanText = "código QR";
            scanner  = <Test/> 
            break;
        default: 
            break;
    }


    return (
        <div className="Scan">

            <Link to = { '/home/' } className="Scan__cancelButton">&times;</Link>

            <div className="Scan__text">
                <h3>Escaneando...</h3>
                <p>Tan solo tienes que centrar el <strong>{scanText}</strong> del producto en el recuadro</p>
            </div>

            <div className="Scan__main">
                {scanner}

                <ScanButtons/>
            </div>

        </div>
    )
}


export function Scan() {
    return ScanTemplate("barcode")
}

export function ScanQr() {
    return ScanTemplate("qr")
}