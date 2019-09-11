import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const TeamForm = props => {
  const [newTeamMember, setNewTeamMember] = useState({
    name: "",
    title: "",
    email: ""
  });

  const handleChange = event => {
    setNewTeamMember({
      ...newTeamMember,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setTeam([newTeamMember, ...props.team]);
  };

  useEffect(() => {
    console.log(props);
  }, [props.memberToEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="formName" hidden>
          Name:
        </Label>
        <Input
          value={newTeamMember.name}
          id="formName"
          placeholder="Name"
          name="name"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="formRole" hidden>
          Role:
        </Label>
        <Input
          value={newTeamMember.role}
          id="formRole"
          placeholder="Role"
          name="role"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="formEmail" hidden>
          Email:
        </Label>
        <Input
          value={newTeamMember.email}
          id="formEmail"
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleChange}
        />
      </FormGroup>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default TeamForm;
