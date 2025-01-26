

import { NavLink } from "react-router-dom"
import "./Home_text.css"
import React from 'react'

const Home_text = () => {
  return (
    <div className="home_text">
     <NavLink className="book_btn"><h3>BOOK NOW</h3></NavLink>
    </div>
  )
}

export default Home_text
