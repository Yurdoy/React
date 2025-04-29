import React, { useState } from "react";

const DisplayMessage = () => {
  const [status, setStatus] = useState(false);
  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div>
      <button onClick={toggleStatus}>Change Status</button>
      {status ? "The user is logged in" : "Please login"}
    </div>
  );
};

export default DisplayMessage;
