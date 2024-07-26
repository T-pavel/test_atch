import { ReactNode, createContext, useState } from "react";

export const IfcContext = createContext({});

export const IfcProvider = ({ children }: { children: ReactNode }) => {
  const [ifcDataState, setIfcDataState] = useState({});
  return (
    <IfcContext.Provider value={{ ifcDataState, setIfcDataState }}>
      {children}
    </IfcContext.Provider>
  );
};
