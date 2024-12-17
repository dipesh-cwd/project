import React from "react";
import "./ThreeLine.css";
import ThreeLineNav from "../threeLineNav/ThreeLineNav";

import { useState, useRef, useEffect } from "react";

function ThreeLine({ isDashOpen, setIsDashOpen }) {
  const lineRef = useRef(null);

  function handelThreeLine(event) {
    if (lineRef.current && !lineRef.current.contains(event.target)) {
      setIsDashOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handelThreeLine);
    return () => {
      document.removeEventListener("mousedown", handelThreeLine);
    };
  }, []);

  return (
    <>
      {isDashOpen && (
        <div ref={lineRef} className="threeLine_section">
         <ThreeLineNav/>
        </div>
      )}
    </>
  );
}

export default ThreeLine;
