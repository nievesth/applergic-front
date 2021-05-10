import React, { useState } from "react";

import "./DiaryProducts.scss";
import close from "../../../assets/img/diary/close.png";
import edit from "../../../assets/img/diary/edit.png";
import { AiFillPropertySafety } from "react-icons/ai";

let scanned = localStorage.getItem("scanned");
console.log(scanned);

const products = [
  {
    name: "Nesquik",
    image:
      "https://www.nestlefamilyclub.es/sites/site.prod.nestlefamilyclub.es/files/styles/480x480_trans_/public/2020-08/40_07613039767719_A1N1.png?itok=PPVHMx5r",
    notes: "Muy rico",
  },
];

export default function DiaryProducts(props) {
  const [selectedProducts, setSelectedProducts] = useState(products);

  function editFunction(key) {
    console.log("editing this one" + key);
    //localstorage del producto y link a pagina de edicion con form que lea
    //el producto lo carge en el form y que tire un patch a back con los nuevos datosx`x`x`?
  }

  function closeFunction(key) {
    console.log(key.index);
    console.log(selectedProducts);
    console.log("closing the index " + key.index);
    const closedProducts = selectedProducts.filter(
      (product, index) => index !== key.index
    );
    scanned = false;
    //API.put('/scannedproducts') etc
    setSelectedProducts(closedProducts);
  }

  return (
    <div>
      {scanned &&
        selectedProducts.map((product, index) => (
          <figure key={index} className="scannedProduct">
            <img src={product.image} className="scannedProduct__img"></img>
            <div className="scannedProduct__sideTextDiv">
              <p className="scannedProduct__text">13-5-2021</p>
              <figcaption className="scannedProduct__text">
                {product.name}
              </figcaption>
              <p className="scannedProduct__text">Notes: {product.notes}</p>
            </div>
            {props.showIt == true && (
              <div className="scannedProduct__sideOptions">
                <img
                  onClick={() => closeFunction({ index })}
                  className="scannedProduct__sideOptions__close"
                  src={close}
                ></img>
                <img
                  onClick={() => editFunction({ index })}
                  className="scannedProduct__sideOptions__edit"
                  src={edit}
                ></img>
              </div>
            )}
          </figure>
        ))}
    </div>
  );
}
