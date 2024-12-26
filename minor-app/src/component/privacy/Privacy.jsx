import "./privacy.css";
import React from "react";
import Empty from "../empty/Empty";

const Pravicy = () => {
  const Contact = "Privacy & policy  ";

  return (
    <div className="privacy_page">
      <div className="privacy_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>
    </div>
  );
};

export default Pravicy;
