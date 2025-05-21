import React, { useContext } from "react";
import DataContext from "./Provider";

const SomeComponent = () => {
  const data = useContext(DataContext);
  return (
    <div>
      {data
        ? data.map((item, index) => <p key={index}>{item.title}</p>)
        : "Loading..."}
    </div>
  );
};

export default SomeComponent;
