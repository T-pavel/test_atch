import { ReactNode, useState } from "react";
import { IfcContext } from "./context";

export const IfcProvider = ({ children }: { children: ReactNode }) => {
    const [ifcDataState, setIfcDataState] = useState({});
    return (
      <IfcContext.Provider value={{ ifcDataState, setIfcDataState }}>
        {children}
      </IfcContext.Provider>
    );
  };
  
  