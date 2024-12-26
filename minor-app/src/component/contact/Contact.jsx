import Empty from "../empty/Empty";
import "./Contact.css";

import React from "react";

const Contact = () => {
  const Contact = "Contact ";
  return (
    <div className="contact_page">
      <div className="contact_content">
        <div className="about_info">
          <Empty pageName={Contact}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;



