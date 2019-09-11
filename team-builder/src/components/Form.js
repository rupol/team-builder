import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    console.log(props);
  }, [props.memberToEdit]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="formName">Name:</label>
      <input
        value={newTeamMember.name}
        id="formName"
        placeholder="Name"
        name="name"
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="formRole">Role:</label>
      <input
        value={newTeamMember.role}
        id="formRole"
        placeholder="Role"
        name="role"
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="formEmail">Email:</label>
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
