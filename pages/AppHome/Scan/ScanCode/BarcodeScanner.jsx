import Quagga from "quagga";
import { useEffect } from "react"; // ES6
import { useHistory } from "react-router";

import { API } from "../../../../shared/consts/api.const";




export function BarcodeScanner() {
  const history = useHistory();
  const scanned = true;
  const initBarcode = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector(".Scan__barcode"), // Or '#yourElement' (optional)
        },
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            "i2of5_reader",
            "2of5_reader",
            "code_93_reader",
          ],
        },
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      }
    );

    Quagga.onDetected((code) => {
      console.log(code);
      /*  const user = JSON.parse(localStorage.getItem("user"));
      API.get(`/user/${user._id}/product/01`).then((res) => {
        console.log("OK");
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data)); */
      localStorage.setItem("scanned", scanned);

      history.push("/sucess-scan");
      /* }); */
      return [code];
    });
  };

  function sendBarcode(code) {
    console.log(code);
    API.post("/user/register", code).then((res) => {
      console.log("Barcode Ok");
      // history.push('/end-register');
    });
  }

  useEffect(initBarcode, []);
  useEffect(sendBarcode, []);
  sendBarcode();
  
  return <div className="Scan__barcode"></div>;
}
