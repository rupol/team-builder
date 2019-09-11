import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const TeamMember = styled.div`
  width: 350px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  text-align: center;
  margin: 10px 2%;
  padding: 0.375rem 0.75rem;
`;

const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Role = styled.h3`
  font-size: 1.5rem;
  text-transform: capitalize;
`;

const Email = styled.h3`
  font-size: 1.3rem;
`;

function Team(props) {
  return (
    <Flex>
      {props.team.map((teamMember, index) => (
        <TeamMember key={index}>
          <Name>{teamMember.name}</Name>
          <Role>{teamMember.role}</Role>
          <Email>{teamMember.email}</Email>
          <Button onClick={props.memberToEdit}>Edit</Button>
        </TeamMember>
      ))}
    </Flex>
  );
}

export default Team;
