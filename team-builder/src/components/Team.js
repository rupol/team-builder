import React from "react";

function Team(props) {
  return (
    <>
      {props.team.map((teamMember, index) => (
        <div className="teamMember" key={index}>
          <h1>{teamMember.name}</h1>
          <h2>{teamMember.role}</h2>
          <h2>{teamMember.email}</h2>
        </div>
      ))}
    </>
  );
}

export default Team;
