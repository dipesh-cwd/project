import "./LineDropDown.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const LineDropDown = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  function toggleDropDown() {
    setIsDropDown(!isDropDown);
  }
  
  const btnRef = useRef(null);
  function handelDropdown(event) {
    if (btnRef.current && !btnRef.current.contains(event.target)) {
      setIsDropDown(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handelDropdown);
    return () => {
      document.removeEventListener("mousedown", handelDropdown);
    };
  }, []);
  return (
    <>
      <div className="dropDowns" onClick={toggleDropDown} ref={btnRef}>
        <div className="name_icons">
          <div className="defaults">Category</div>
          <div className="icons">
            {" "}
            {isDropDown ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </div>
        </div>

        {isDropDown && (
          <div className="btn_containers">
            <NavLink to="/car_page" className="dropDown_btns car_btns">
              Car
            </NavLink>
            <NavLink to="/bike_page" className="dropDown_btns bike_btns">
              Bike
            </NavLink>
            <NavLink to="/hice_page" className="dropDown_btns hice_btns">
              Hice
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default LineDropDown;
