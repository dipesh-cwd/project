import "./Nav.css";
import React from "react";
import { NavLink } from "react-router-dom";
import DropDown from "../../dropDown/DropDown";
function Nav() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="nav_btn home_btn">
          Home
        </NavLink>
        <DropDown />
        <NavLink to="/about" className="nav_btn about_btn ">
          About
        </NavLink>

        <NavLink to="/contact" className="nav_btn contact_btn">
          Contact
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
