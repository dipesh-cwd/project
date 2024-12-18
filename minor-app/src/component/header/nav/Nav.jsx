import "./Nav.css";
import React from "react";
import Dropdown from "../../../components/Dropdown/Dropdown.jsx";
import DropdownItem from "../../../components/DropdownItem/DropdownItem.jsx";
const items = ["Car", "Bike", "Hice"];
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="nav_btn home_btn">
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
