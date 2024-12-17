import React from 'react';
import './ThreeDot.css';
import { useState, useEffect, useRef } from 'react';
import {NavLink} from 'react-router-dom';

function ThreeDot ({ThreeDotOpen, setIsThreeDotOpen}) {

  const btnRef = useRef(null);

  function handelBoxOpen(event){
 
    if (btnRef.current && !btnRef.current.contains(event.target)) {
      setIsThreeDotOpen(false);
   
    }
  };

  useEffect(() => {

    document.addEventListener('mousedown', handelBoxOpen);

    return () => {
      document.removeEventListener('mousedown', handelBoxOpen);
    };


  }, []);


  function confirmExit(){
    if(confirm("Are you want to exit?")){
      window.location.href = "https://www.google.com";
      // window.close();
    }
  }

  return (
    <>
  {ThreeDotOpen &&  <div  ref={btnRef} className='three_dot' >
   
  <NavLink to="/profile" className={({ isActive }) => `btn_profile  btn_style ${isActive ? 'active' : ''}`}
         >Profile</NavLink>



<NavLink to="/setting" className={({ isActive }) => `btn_profile  btn_style ${isActive ? 'active' : ''}`}
         >Setting</NavLink>
  <NavLink to="/help" className={({ isActive }) => `btn_profile  btn_style ${isActive ? 'active' : ''}`}
         >Help</NavLink>      <button className='btn_exit btn_style' onClick={confirmExit}>Exit</button>
  <NavLink to="/privacy and policy" className={({ isActive }) => `btn_profile  btn_style ${isActive ? 'active' : ''}`}
         >Privacy & Policy</NavLink>


      </div> }  

    </>
 
  )
}

export default ThreeDot;
