import { useState } from "react";

function ActiveClass() {
  const arrStr = ["str1", "str2", "str3"];
  const [tab, setTab] = useState(0);

  const handleClick = (index) => {
    setTab(index);
  };
  return (
    <>
      <ul>
        {arrStr.map((str, index) => (
          <li
            onClick={() => handleClick(index)}
            className={tab === index ? "active" : "default"}
            key={index}
          >
            {str}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ActiveClass;
