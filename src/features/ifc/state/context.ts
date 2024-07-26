import { createContext, useContext } from "react";
import { IIfcContext } from "./types";

export const IfcContext = createContext<IIfcContext>({});
export const useIfcContext = () => {
  return useContext(IfcContext);
};
