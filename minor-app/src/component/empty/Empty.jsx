

import './Empty.css';
import React from 'react'

const Empty = ({pageName}) => {
  return (
    <div className='empty_page'>
        <p> {pageName}page is currently empty.</p>
      
    </div>
  )
}

export default Empty
