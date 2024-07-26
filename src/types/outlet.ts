import { ReactNode } from "react";

export interface IOutletContext {
  setChildren: (children: ReactNode) => void;
  activateRightSideBar: (isActive?: boolean) => void;
}
