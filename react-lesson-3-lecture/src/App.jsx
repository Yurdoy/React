import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardsList from "./components/CardsList";
import CreateButton from "./components/CreateButton";
import React, { useState } from "react";
import Calculate from "./components/Calculate";
import Animals from "./components/Animals";

function App() {
  const [animals, setAnimals] = useState([]);
  const [count, setCount] = useState(0);
  const teams = [
    {
      name: "Dragons United",
      members: [
        "David Miller",
        "Ethan Turner",
        "Natalie Clark",
        "Sophie Gomez",
        "Tom Hanks",
      ],
    },
    {
      name: "Golden Eagles",
      members: [
        "Lisa Ray",
        "Harry Ford",
        "Betty Cooper",
        "George King",
        "Alice Morgan",
      ],
    },
    {
      name: "Mighty Warriors",
      members: [
        "Sam Wilson",
        "John Norton",
        "Emma Cartright",
        "Daniel Lewis",
        "Megan Stone",
      ],
    },
    {
      name: "Falcon Flyer",
      members: ["Oscar Wilde", "Robert Brown", "Metthew Johns"],
    },
    {
      name: "Storm Breakers",
      members: [
        "Lucas White",
        "Eva Taylor",
        "Charles Anderson",
        "Emily Johnson",
        "Aaron Carter",
      ],
    },
  ];
  const divStyle = {
    background: "lightblue",
    border: "2px solid blue",
    height: 125,
    width: 450,
  };
  const pStyle = {
    color: "purple",
  };
  return (
    <div style={divStyle}>
      <Animals />
      <Calculate />
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ut!
        Veniam amet quos quas, aperiam accusamus exercitationem corrupti quod
        adipisci dignissimos, in eligendi quibusdam iste aliquam, sed
        consectetur assumenda! Eveniet!
      </p>
      <CardsList teamsData={teams} />
      <CreateButton text="Click Me" />
    </div>
  );
}

export default App;
