import { useContext } from "react";
import { DataContext } from "./DataProvider";

function Text() {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <div>
      <h1>Text</h1>
    </div>
  );
}

export default Text;
