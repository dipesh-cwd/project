import React from "react";
import { useState } from "react";
import "./Header.css";
import Nav from "./nav/Nav.jsx";
import LogoPicImage from "../logoPic/LogoPic.jsx";
import ThreeDot from "./threeDot/ThreeDot.jsx";
import Cart from "./cart/Cart.jsx";
import Profile from "./profile/Profile.jsx";
import ThreeLine from './threeLine/ThreeLine.jsx';

function Header() {
  const LogoPic = "./public/logo.png";
// to handel logo big image open or not
  const [isLogoOpen, setIsLogoOpen] = useState(false);
  function openLogoPic() {
    setIsLogoOpen(!isLogoOpen);
  }
// to handel three dot section open or not
  const [isThreeDotOpen, setIsThreeDotOpen] = useState(false);
  function handleThreeDot() {
    setIsThreeDotOpen(true);
  }

  // to handel cart open or not
  const [isCartOpen, setIsCartOpen] = useState(false);
  function handelCart() {
    setIsCartOpen(true);
  }

  // to handel profile is open or not

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  function handelProfile() {
    setIsProfileOpen(true);
  }

   // to handel three dash is open or not

   const [isDashOpen, setIsDashOpen] = useState(false);
   function handelDash() {
    setIsDashOpen(true);
   }


  return (
    <>
      <LogoPicImage
        logoOpen={isLogoOpen}
        handelClose={openLogoPic}
        setIsLogoOpen={setIsLogoOpen}
      />
      <div className="header">
        <img
          src={LogoPic}
          alt="Logo pic"
          className="logo"
          onClick={openLogoPic}
        />
<Nav/>

        <div className="search">
          <input
            className="type_section"
            type="search"
            placeholder="Type to search..."
          />
          <div className="search-logo">
            <i
              className="fa-solid fa-magnifying-glass fa-lg"
              style={{ color: " #ffffff" }}
            ></i>
          </div>
        </div>

        <div className="profile" onClick={handelProfile}>
          <i
            className="fa-solid fa-user fa-lg"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
        <div className="cart" onClick={handelCart}>
          <i
            className="fa-solid fa-cart-shopping fa-xl"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
        <div className="burger" onClick={handelDash}>
          <i
            className="fa-solid fa-bars fa-xl"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
        <div className="threeDot" onClick={handleThreeDot}>
          <i
            className="fa-solid fa-ellipsis-vertical fa-xl"
            style={{ color: " #fcfcfc" }}
          ></i>
        </div>
      </div>

      <ThreeDot
        ThreeDotOpen={isThreeDotOpen}
        setIsThreeDotOpen={setIsThreeDotOpen}
      />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Profile isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen} />
<ThreeLine isDashOpen ={isDashOpen}  setIsDashOpen={setIsDashOpen}/>
    </>
  );
}

export default Header;
