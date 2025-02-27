import React, { useState } from "react";

function Animals() {
  const [animals, setAnimals] = useState([]);

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

  const updateAnimals = (animal) => {
    setAnimals((prevAnimals) => [...prevAnimals, animal]);
  };

  function randomAnimal() {
    const randInt = Math.floor(Math.random() * 10);
    updateAnimals(animalList[randInt]);
  }

  return (
    <div>
      <button onClick={randomAnimal}>Add random animal</button>
      <ul>
        {animals.map((animal, index) => (
          <li key={animal + index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Animals;
