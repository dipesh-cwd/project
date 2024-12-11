import React from 'react';
import './ThreeDot.css';
import { useState, useEffect, useRef } from 'react';


function ThreeDot ({ThreeDotOpen, setIsThreeDotOpen}) {

  const btnRef = useRef(null);

  function handelBoxOpen(event){
 
    if (btnRef.current && !btnRef.current.contains(event.target)) {
      setIsThreeDotOpen(false);
   
    }
  };

  useEffect(() => {

    document.addEventListener('mousedown', handelBoxOpen);
 console.log("use effect is called");
    return () => {
      document.removeEventListener('mousedown', handelBoxOpen);
    };


  }, []);

  return (
    <>
  {ThreeDotOpen &&  <div  ref={btnRef} className='three_dot' >
  
      <button className='btn_profile btn_style'>Profile</button>
      <button className='btn_setting btn_style'>Setting</button>
      <button className='btn_help btn_style'>Help</button>
      <button className='btn_exit btn_style'>Exit</button>
      <button className='btn_privacy btn_style'>privacy policy</button>



      </div> }  

    </>
 
  )
}

export default ThreeDot;
