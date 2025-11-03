import React from "react";
import "./member-card.css";

const MemberCard = ({ name, role, avatar }) => {
  return (
    <div className="member-card">
      <img src={avatar} alt={name} />
      <h3 className="member-name">{name}</h3>
      <p className="member-role">{role}</p>
    </div>
  );
};

export default MemberCard;
