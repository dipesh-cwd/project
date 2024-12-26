import "./Location.css";
import React from "react";
import Empty from "../empty/Empty";

const Location = () => {
  const Contact = "Location ";

  return (
    <div className="location_page">
      <div className="location_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>
    </div>
  );
};

export default Location;
