import React, { useState } from "react";
import "./App.css";
import Team from "./components/Team";
import Form from "./components/Form";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Ethan Holbrook",
      email: "ethan.m.holbrook@gmail.com ",
      role: "pizza maker and host extraordinaire"
    },
    {
      name: "Mikhail Twarogowski",
      email: "mikhailtwar@gmail.com",
      role: "sometime sauceboy, current chicken dad"
    },
    {
      name: "Jeff Garland",
      email: "jeffgarland@gmail.com",
      role: "cat co-parent and big sweetie"
    },
    {
      name: "Jeff Troeger",
      email: "jefftroeger@gmail.com",
      role: "pokemaster, never a cop"
    },
    {
      name: "Bethany Chambers",
      email: "bethanylchambers@gmail.com",
      role: "good good designer"
    },
    {
      name: "Jay Tillman",
      email: "jaytillman@gmail.com",
      role: "former neighbor and all around cool guy"
    },
    {
      name: "Victoria Winslet",
      email: "victoriawinslet@gmail.com",
      role: "mother of pomeranians, first of her name"
    },
    {
      name: "Joanna Willits",
      email: "jowillits@gmail.com",
      role: "nextdoor rennaisance woman"
    },
    {
      name: "Jerri Hobdy",
      email: "jerrihobdy@gmail.com",
      role: "stylish as hell designer as hell"
    },
    {
      name: "Kelly Holbrook-Wilson",
      email: "kellyholbrookwilson@gmail.com",
      role: "awesomest big sister"
    },
    {
      name: "Troy Wilson",
      email: "troywilson@gmail.com",
      role: "tennis and handsomeness champion"
    }
  ]);

  const [member, setMember] = useState();

  function memberToEdit() {
    console.log("edit button clicked");
  }

  return (
    <div>
      <Team team={team} memberToEdit={memberToEdit} />
      <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
