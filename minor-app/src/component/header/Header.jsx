
import React from 'react';
import { useState } from 'react';



import './Header.css';

function Header() {
  const [isopen, setIsopen]= useState(false); 

  const dropDown = () =>{
setIsopen(!isopen);
  };

   const LogoPic = "./public/logo.png" ;
 
    return (
      <div className='header'>
       <img src={LogoPic} alt="Logo pic" className='logo'/>
       <nav className='nav'>
        <a href="#" className='home-btn'>Home</a>
       <div className="category" style={{position : "relative",}}>
        <button onClick={dropDown}>Category</button>
        
        {isopen && (<div>
          <ul>
            <li>Car</li>
            <li>Bus</li>
            <li>Bike</li>
          </ul>
          </div>
        )}

        
        
         </div>
        <a href="#" className='about-btn'>About us</a>
        <a href="#" className='contact-btn'>Contact us</a>
       </nav>
       
      </div>
    )
  }
  
  export default Header ;
  