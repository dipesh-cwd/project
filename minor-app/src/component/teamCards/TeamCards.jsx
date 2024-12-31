import "./TeamCards.css";
import React from "react";

const TeamCards = ({info}) => {
  return (
    <div className="team_container">
      
      
      {info.map((member, index) => (
        
        <div className="team_cards" key={index}>
          <div className="card_img">
            <img src={member.image_url} alt= {member.name.split(" ")[0]} />
          </div>
          <div className="card_content">
            <h3 className="team_name">{member.name}</h3>
            <p className="team_work">{member.role}</p>
            <p className="team_email">{member.email}</p>
          </div>
        </div>

      ))}
     
    </div>
   
  
  );
};

export default TeamCards;
