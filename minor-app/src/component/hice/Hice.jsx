import "./Hice.css";
import React from "react";
import Empty from "../empty/Empty";

const Hice = () => {
  const Contact = "Hice ";
  return (
    <div className="hice_page">
      <div className="hice_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>{" "}
    </div>
  );
};
export default Hice;
