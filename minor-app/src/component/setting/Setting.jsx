import "./Setting.css";
import React from "react";
import Empty from "../empty/Empty";

const Setting = () => {
  const Contact = "Setting ";

  return (
    <div className="setting_page">
      <div className="setting_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>{" "}
    </div>
  );
};

export default Setting;
