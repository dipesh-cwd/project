

import './Error.css';
import React from 'react';
import Empty from "../empty/Empty";


const Error = () => {
  const Contact = "Error ";
  return (
    <div className='error_page'>

<div className="error_content">
  <div className="about_info">
    <Empty pageName={Contact}/>
  </div>
</div>
      
    </div>
  )
};

export default Error;
