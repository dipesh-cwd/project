

import "./ThreeLineNav.css";
import React from "react";
import Dropdown from "../../../components/Dropdown/Dropdown.jsx";
import DropdownItem from "../../../components/DropdownItem/DropdownItem.jsx";
const items = ["Car", "Bike", "Hice"];
import {NavLink} from 'react-router-dom';

function ThreeLineNav() {
  return (
    <>
      <div className="threeLineNav">

<NavLink to="/" className={({ isActive }) => `nav_btn home_btn ${isActive ? 'active' : ''}`}
       >Home</NavLink>
       
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
        <NavLink to="/about" className={({ isActive }) => `nav_btn home_btn ${isActive ? 'active' : ''}`}
       >About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav_btn home_btn ${isActive ? 'active' : ''}`}
       >Contact</NavLink>
      </div>

   
  
  <button className='btn_profile btn_style'>Profile</button>
  <button className='btn_setting btn_style'>Setting</button>
  <button className='btn_help btn_style'>Help</button>
  <button className='btn_exit btn_style'>Exit</button>
  <button className='btn_privacy btn_style'>privacy policy</button>




    </>
  );
}

export default ThreeLineNav;
