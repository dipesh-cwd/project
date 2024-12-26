

import './Help.css';
import Empty from "../empty/Empty";

import React from 'react'

const Help = () => {
  const Contact = "Help ";

  return (
    <div className='help_page'>

<div className="help_content">
  <div className="about_info">
    <Empty pageName={Contact}/>
  </div>
</div>
    </div>
  )
}

export default Help
