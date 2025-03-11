import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default DataProvider;
