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
          About us
        </a>
        <a href="#" className="contact-btn">
          Contact us
        </a>
      </nav>
      <div className="search">
        <input type="search" placeholder="type to search..." />
        <div className="search-logo"></div>
      </div>
      <a href="#" className="pp-btn">
        privacy policy
      </a>
    </div>
  );
}

export default Header;
