import React, { useState } from "react";

const Answer = ({ updatePoints }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Your Answer"
        required
      />
      <button type="submit">Check</button>
    </form>
  );
};

export default Answer;
