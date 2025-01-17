import { IOutletContext } from "@src/types";
import { ReactNode, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

interface IArgs {
  children: ReactNode;
  isRightSideBar?: boolean;
}

export const useInit = ({ children, isRightSideBar }: IArgs) => {
  const { setChildren, activateRightSideBar }: IOutletContext = useOutletContext();

  useEffect(() => {
    setChildren(children);
  }, [setChildren, children]);

  useEffect(() => {
    activateRightSideBar(isRightSideBar);
  }, [activateRightSideBar, isRightSideBar]);
};
