import "./Profile.css";
import React from "react";
import Empty from "../empty/Empty";

const Profile = () => {
  const Contact = "Profile ";

  return (
    <div className="profile_page">
      <div className="profile_content">
        <div className="about_info">
          <Empty pageName={Contact} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
