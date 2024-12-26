import "./Offer.css";
import React from "react";
import Empty from "../empty/Empty";

const Offer = () => {
  const Contact = "Offer ";

  return (
    <div className="offer_page">
      <div className="offer_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>
    </div>
  );
};

export default Offer;
