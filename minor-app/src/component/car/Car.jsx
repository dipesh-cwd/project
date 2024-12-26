import "./Car.css";
import React from "react";
import Empty from "../empty/Empty";

const Car = () => {
  const Contact = "Car ";
  return (
    <div className="car_page">
      <div className="car_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>
    </div>
  );
};

export default Car;
