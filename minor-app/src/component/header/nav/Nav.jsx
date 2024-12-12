
import './Nav.css';
import React from 'react';
// import Dropdown from "../../../components/Dropdown/Dropdown";
// import DropdownItem from "../../../components/DropdownItem/DropdownItem.jsx";
import Dropdown from "../../../components/Dropdown/Dropdown.jsx";
import DropdownItem from "../../../components/DropdownItem/DropdownItem.jsx";
const items = ["Car", "Bike", "Hice"];

function Nav (){  
  return (
    <>
    
      {/* nav is start from here */}

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
        {/* nav is end here */}
    
    </>
  )
}

export default Nav
