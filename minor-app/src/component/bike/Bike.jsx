import "./Bike.css";
import React from "react";
import Empty from "../empty/Empty";

const Bike = () => {
  const Contact = "Bike ";
  return (
    <div className="bike_page">
      <div className="bike_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>
    </div>
  );
};

export default Bike;
