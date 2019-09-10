import React, { useState } from "react";

const Form = props => {
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

  return (
    <form onSubmit={handleSubmit}>
      <label for="formName">Name:</label>
      <input
        value={newTeamMember.name}
        id="formName"
        placeholder="Name"
        name="name"
        type="text"
        onChange={handleChange}
      />

      <label for="formRole">Role:</label>
      <input
        value={newTeamMember.role}
        id="formRole"
        placeholder="Role"
        name="role"
        type="text"
        onChange={handleChange}
      />

      <label for="formEmail">Email:</label>
      <input
        value={newTeamMember.email}
        id="formEmail"
        placeholder="Email"
        name="email"
        type="email"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
