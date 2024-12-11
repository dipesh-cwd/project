import "./LogoPic.css";
import React from "react";
import { useState, useRef, useEffect } from "react";
// import { isLogoOpen } from "../header/Header.jsx";

function LogoPic({logoOpen, handelClose, setIsLogoOpen}) {
  const logoRef = useRef(null);

  function closeOutSideLogo(event){
    if(logoRef.current && !logoRef.current.contains(event.target)){
      setIsLogoOpen(false);
    }
  }

  useEffect(()=>{

document.addEventListener('mousedown', closeOutSideLogo);
return () =>{
  document.removeEventListener('mousedown', closeOutSideLogo);

};

  },[]);

  const logoImage = "./public/logo.png";
  

  return (
    <>
      {logoOpen && (
        <div  ref={logoRef}  className="logo-big-box">
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
