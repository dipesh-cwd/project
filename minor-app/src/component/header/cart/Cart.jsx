import React from 'react';
  import './Cart.css';
  import { useState, useRef, useEffect } from 'react';


function Cart({isCartOpen,setIsCartOpen}){
  const cartRef = useRef(null);
  function closeOutSideCart(event){
    if(cartRef.current && !cartRef.current.contains(event.target)){
      setIsCartOpen(false);
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown',closeOutSideCart);
    return()=>{
document.removeEventListener('mousedown',closeOutSideCart);
    };
  },[]);


  return (
    <>
    {isCartOpen &&  <div ref={cartRef} className='cart_section' >
    <h2>Book Now</h2>
        </div> 
    
    }
   
  
      </>
  )
}

export default Cart
