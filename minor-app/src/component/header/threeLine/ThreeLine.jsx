


import React from 'react'
import './ThreeLine.css';
import { useState, useRef, useEffect } from 'react';

function ThreeLine({isDashOpen, setIsDashOpen}){
    const lineRef = useRef(null);

    function handelThreeLine(event){
        if(lineRef.current && !lineRef.current.contains(event.target)){
            setIsDashOpen(false);
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', handelThreeLine);
        return ()=>{
            document.removeEventListener('mousedown',handelThreeLine);
        }
    },[]);


  return (
      <>
    {isDashOpen &&  <div ref={lineRef} className='threeLine_section' >
    <h2>three line</h2>
    <button className='lineBtn_style'>a</button>
    <button className='lineBtn_style'>b</button>
    <button className='lineBtn_style'>c</button>
    <button className='lineBtn_style'>d</button>






        </div> 
    
    }
   
  
      </>
  )
}

export default ThreeLine