import React from "react";
import { useState } from "react";

import "./Header.css";

function Header() {
  const [isopen, setIsopen] = useState(false);

  const dropDown = () => {
    setIsopen(!isopen);
  };

  const LogoPic = "./public/logo.png";

  return (
    <div className="header">
      <img src={LogoPic} alt="Logo pic" className="logo" />
      <nav className="nav">
        <a href="#" className="home-btn">
          Home
        </a>
        <div className="category" style={{ position: "relative" }}>
          <button onClick={dropDown}>
            Category <i className="fa-solid fa-angle-down fa-lg"></i>
          </button>

          {isopen && (
            <div className="list-div">
              <ul className="category-ul">
                <li>
                  <a href="#">Car</a>
                </li>
                <li>
                  <a href="#">Bus</a>
                </li>
                <li>
                  <a href="#">Bike</a>
                </li>
              </ul>
            </div>
          )}
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
