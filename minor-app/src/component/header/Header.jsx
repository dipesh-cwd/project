import React from "react";
import { useState } from "react";

import "./Header.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownItem from "../../components/DropdownItem/DropdownItem.jsx";

function Header() {
  const items = ["Car", "Bike", "Hice"];

  const LogoPic = "./public/logo.png";

  return (
    <div className="header">
      <img src={LogoPic} alt="Logo pic" className="logo" />
      <nav className="nav">
        <a href="#" className="home-btn">
          Home
        </a>
        <div className="content">
          <Dropdown
            buttonText="Category"
            content={
              <>
                {items.map((item, id) => (
                  <DropdownItem key={id}>{`${item}`}</DropdownItem>
                ))}
              </>
            }
          />
        </div>
        <a href="#" className="about-btn">
          About
        </a>
        <a href="#" className="contact-btn">
          Contact
        </a>
      </nav>
      <div className="search">
        <input className = "type_section" type="search" placeholder="type to search..." />
        <div className="search-logo"><i className="fa-solid fa-magnifying-glass fa-lg" style={{color:" #ffffff"}}></i></div>
      </div>
      
      <div className="profile"><i className="fa-solid fa-user fa-lg" style={{color: "#ffffff"}}></i></div>
      <div className="cart"><i className="fa-solid fa-cart-shopping fa-xl" style={{color:"#ffffff"}}></i></div>
      <div className="burger"><i className="fa-solid fa-bars fa-xl" style={{color: "#ffffff"}}></i></div>
      <div className="threeDot"><i className="fa-solid fa-ellipsis-vertical fa-xl" style={{color:" #fcfcfc"}}></i></div>
    </div>
  );
}

export default Header;
