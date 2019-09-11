import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 3rem;
`;

const Role = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
`;

const Email = styled.h2`
  font-size: 2rem;
`;

function Team(props) {
  return (
    <>
      {props.team.map((teamMember, index) => (
        <div className="teamMember" key={index}>
          <Name>{teamMember.name}</Name>
          <Role>{teamMember.role}</Role>
          <Email>{teamMember.email}</Email>
          <button onClick={props.memberToEdit}>Edit</button>
        </div>
      ))}
    </>
  );
}

export default Team;
