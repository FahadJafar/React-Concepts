import { createContext, useContext, useState } from "react";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUserData] = useState([{ Name: "", token: 0 }]);

  return (
    <DataContext.Provider value={{ user, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = () => useContext(DataContext);
