import React from "react";
import MemberCard from "./MemberCard";
import "./member-card.css";

const teamMembers = [
  { name: "ice", role: "Frontend Developer", avatar: "cat.jpg" },
  { name: "min", role: "Backend Developer", avatar: "cat.jpg" },
  { name: "flim", role: "UI/UX Designer", avatar: "cat.jpg" },
  { name: "khing", role: "Project Manager", avatar: "cat.jpg" },
];

const App = () => {
  return (
    <>
      <h1>CodeVerse Studio Team</h1>
      <hr />
      <div className="team-container">
        {teamMembers.map((m) => ( 
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </>
  );
};

export default App;
