import React from "react";
import "./ThreeDot.css";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ThreeLineNav from "../threeLineNav/ThreeLineNav";

function ThreeDot({ ThreeDotOpen, setIsThreeDotOpen }) {
  const btnRef = useRef(null);

  function handelBoxOpen(event) {
    if (btnRef.current && !btnRef.current.contains(event.target)) {
      setIsThreeDotOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handelBoxOpen);

    return () => {
      document.removeEventListener("mousedown", handelBoxOpen);
    };
  }, []);

  // to show home button in three Dot

  const [isLessSize, setIsLessSize] = useState(window.innerWidth < 750);
  const checkWidth = () => {
    setIsLessSize(window.innerWidth < 750);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  // to handel exit button
  const [isExit, setIsExit] = useState(false);

  function openExit() {
    setIsExit(true);
  }
  function closeExit() {
    setIsExit(false);
  }
  function handleExit() {
    window.location.href = "https://www.google.com";
  }

  return (
    <>
      {isExit && (
        <div className="exit_page">
          <div className="innerExit_page">
            <p>Are you sure you want to exit?</p>
            <button onClick={handleExit} className="yes_btn conform_btn">
              Yes
            </button>
            <button onClick={closeExit} className="no_btn conform_btn">
              No
            </button>
          </div>
        </div>
      )}

      {ThreeDotOpen && (
        <div ref={btnRef} className="three_dot">
          <div className="site_name">
            <h2>RideNow</h2>
            <p>Rent a Vehicle</p>
          </div>
          {isLessSize && (
            <div style={{ width: "100%" }}>
              <ThreeLineNav />
            </div>
          )}

          <div className="user_btn" style={{ width: "100%" }}>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `btn_profile  btn_style ${isActive ? "active" : ""}`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/setting"
              className={({ isActive }) =>
                `btn_profile  btn_style ${isActive ? "active" : ""}`
              }
            >
              Setting
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `btn_profile  btn_style ${isActive ? "active" : ""}`
              }
            >
              Help
            </NavLink>{" "}
            <button className="btn_exit btn_style" onClick={openExit}>
              Exit
            </button>
            <NavLink
              to="/privacy and policy"
              className={({ isActive }) =>
                `btn_profile  btn_style ${isActive ? "active" : ""}`
              }
            >
              Privacy & Policy
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default ThreeDot;
