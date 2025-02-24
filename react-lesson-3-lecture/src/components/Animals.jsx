import React, { useState } from "react";

function randomAnimal() {
  const randInt = Math.floor(Math.random() * 10);
  updateAnimals(animalList[randInt]);
}

function Animals() {
  const animalList = [
    "Dog",
    "Cat",
    "Hare",
    "Wolf",
    "Fox",
    "Bear",
    "Deer",
    "Marmot",
    "Hamster",
    "Squirrel",
  ];
  const [animals, setAnimals] = useState([]);
  const updateAnimals = (animal) => {
    setAnimals((prevAnimals) => [...prevAnimals, animal]);
  };
  return (
    <div>
      <button onClick={randomAnimal}>Add random animal</button>
      <ul>
        {animals.map((animal) => (
          <li key={animal + index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Animals;
