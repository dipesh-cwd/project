import "./ThreeLineNav.css";
import React from "react";
import Dropdown from "../../../components/Dropdown/Dropdown.jsx";
import DropdownItem from "../../../components/DropdownItem/DropdownItem.jsx";
const items = ["Car", "Bike", "Hice"];
import { NavLink } from "react-router-dom";

function ThreeLineNav() {
  return (
    <>
      <div className="threeLineNav">
        <NavLink
          to="/"
          className="home_btn threeLine_btn">
          Home
        </NavLink>

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
        <NavLink
          to="/about"
          className="about_btn threeLine_btn">
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="contact_btn threeLine_btn">
          Contact
        </NavLink>
      </div>
    </>
  );
}

export default ThreeLineNav;
