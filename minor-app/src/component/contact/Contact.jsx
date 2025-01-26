import Empty from "../empty/Empty";
import "./Contact.css";

import React from "react";

const Contact = () => {
  const Contact = "Contact ";
  return (
    <div className="contact_page">
      <div className="contact_content">
        <div className="contact_form">
          <h3>CONTACT FORM</h3>
          <form>
            <div className="form_box">
              <label htmlFor="full_name">Full Name </label>
              <input type="text" name="full_name" className="full_name" />
            </div>
            <div className="form_box">
              <label htmlFor="full_name">Email </label>
              <input type="email" name="full_name" className="email" />
            </div>
            <div className="form_box">
              <label htmlFor="message">Message </label>
              <textarea name="message" id="message" className="message"></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
