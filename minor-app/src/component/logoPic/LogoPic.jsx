import "./LogoPic.css";
import React from "react";
import { useState } from "react";
// import { isLogoOpen } from "../header/Header.jsx";

function LogoPic({logoOpen, handelClose}) {
  const logoImage = "./public/logo.png";
  

  return (
    <>
      {logoOpen && (
        <div className="logo-big-box">
          <div className="logo-close" onClick={handelClose}>
            <i
              className="fa-solid fa-circle-xmark"
              style={{ color: "#fe010e" }}
            ></i>
          </div>

          <div className="logo-box">
            <img src={logoImage} alt="logo image" />
          </div>
        </div>
      )}
    </>
  );
}

export default LogoPic;
