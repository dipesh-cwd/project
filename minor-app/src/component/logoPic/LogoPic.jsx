import "./LogoPic.css";
import React from "react";
import { useState } from "react";
// import { isLogoOpen } from "../header/Header.jsx";

function LogoPic() {
  const logoImage = "./public/logo.png";
  const [logoOpen, setLogoOpen] = useState(true);
  function closeLogo (){
    setLogoOpen(false);
  }

  return (
    <>
      {logoOpen && (
        <div className="logo-big-box">
          <div className="logo-close" onClick={closeLogo}>
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
