import React, { useState } from "react";
import Answer from "./Answer";

function MathQuiz() {
  const [score, setScore] = useState(0);
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b;
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setA(generateRandomNumber());
    setB(generateRandomNumber());
  };

  return (
    <div>
      <h1>Math Quiz</h1>
      <h2>Score: {score}</h2>
      <h3>
        What is Result of: {a} + {b}
      </h3>
      <Answer updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
