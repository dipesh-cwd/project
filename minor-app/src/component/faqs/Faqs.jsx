import "./Faqs.css";
import React from "react";
import Empty from "../empty/Empty";

const Faqs = () => {
  const Contact = "FAQs ";
  return (
    <div className="faqs_page">
      <div className="faqs_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
