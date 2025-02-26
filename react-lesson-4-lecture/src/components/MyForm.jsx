import React, { useState } from "react";

function MyForm() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (newValue.length < 5) {
      setIsValid(false);
      setMessage("Text length should be not less than 5 symbols");
    } else {
      setIsValid(true);
      setMessage("Text is valid");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ borderColor: isValid ? "green" : "red" }}
      />
      <p style={{ color: isValid ? "green" : "red" }}>{message}</p>
    </div>
  );
}

export default MyForm;
