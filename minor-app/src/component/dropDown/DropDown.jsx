import "./DropDown.css";

import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function DropDown() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isName, setISName] = useState("Category");

  function toggleDropDown() {
    setIsDropDown(!isDropDown);
  }
  function changeName(name) {
    setISName(name);

    setTimeout(() => {
      setISName("Category");
    }, 30000);
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
      <div className="dropDown" onClick={toggleDropDown} ref={btnRef}>
        <div className="name_icon">
          <div className="default">{isName}</div>
          <div className="icon">
            {" "}
            {isDropDown ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </div>
        </div>

        {isDropDown && (
          <div className="btn_container">
            <NavLink
              to="/car_page"
              className="dropDown_btn car_btn"
              onClick={() => changeName("Car")}
            >
              Car
            </NavLink>
            <NavLink
              to="/bike_page"
              className="dropDown_btn bike_btn"
              onClick={() => changeName("Bike")}
            >
              Bike
            </NavLink>
            <NavLink
              to="/hice_page"
              className="dropDown_btn hice_btn"
              onClick={() => changeName("Hice")}
            >
              Hice
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDown;
