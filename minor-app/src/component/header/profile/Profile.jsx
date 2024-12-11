import React from "react";
import "./Profile.css";
import { useState, useEffect, useRef } from "react";

function Profile({ isProfileOpen, setIsProfileOpen }) {
  const profileRef = useRef(null);

  function handelProfile(event) {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfileOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handelProfile);
    return () => {
      document.removeEventListener("mousedown", handelProfile);
    };
  }, []);

  return (
    <>
      {isProfileOpen && (
        <div ref={profileRef} className="profile_section">
          <div className="upperProfile"></div>

          <div className="lowerProfile">
            <div className="profilePic">
              <div className="innerProfilePic">D</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
