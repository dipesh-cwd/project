import "./HowItWorks.css";
import React from "react";
import Empty from "../empty/Empty";

const HowItWorks = () => {
  const Contact = "How it works  ";
  return (
    <div className="howItWorks_page">
      <div className="howItWorks_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>{" "}
    </div>
  );
};
export default HowItWorks;
