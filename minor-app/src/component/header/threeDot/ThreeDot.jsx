import React from 'react';
import './ThreeDot.css';


function ThreeDot ({ThreeDotOpen, handleThreeDot}) {
  return (
    <>
  {ThreeDotOpen &&  <div className='three_dot' >
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
