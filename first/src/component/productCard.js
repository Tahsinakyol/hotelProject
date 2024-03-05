import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const ProductCard = ({
  imageCom,
  percantage = false,
  percant,
  name,
  detail,
  price,
}) => {
  return (
    <a href="/ProductDetail" className="hotelCard">
      <div className="imagesHoverMain">
        <img
          className="imagesProductCardx"
          src={imageCom}
          alt="Resim Yok"
        ></img>
        <div className="noneAbsHover">
          <FaEye className="eyeFont" />
          Oteli Gör
        </div>
      </div>
      <div className="generateDetailCardComp">
        <h1>{name}</h1>
        <span>{detail}</span>
        <div className="spacePriceAndProsess">
          <div className="priceCompCard">
            {price}.<span>00 ₺</span>
          </div>
          {percantage == true ? (
            <>
              <div className="percantageClassed">%{percant}</div>
            </>
          ) : null}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
