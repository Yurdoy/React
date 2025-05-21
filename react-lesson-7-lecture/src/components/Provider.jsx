import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
      console.error("Ошибка при загрузке данных", error);
    }
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
