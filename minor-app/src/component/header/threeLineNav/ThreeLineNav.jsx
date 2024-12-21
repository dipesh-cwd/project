import "./ThreeLineNav.css";
import React from "react";
import { NavLink } from "react-router-dom";
import LineDropDown from '../../lineDropDown/LineDropDown.jsx'

function ThreeLineNav() {

  
  return (
    <>
      <div className="threeLineNav">
        <NavLink to="/" className="home_btn threeLine_btn">
          Home
        </NavLink>
        <LineDropDown/>

        <NavLink to="/about" className="about_btn threeLine_btn">
          About
        </NavLink>
        <NavLink to="/contact" className="contact_btn threeLine_btn">
          Contact
        </NavLink>
      </div>
    </>
  );
}

export default ThreeLineNav;
