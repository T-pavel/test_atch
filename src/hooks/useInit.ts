import { IOutletContext } from "@src/types";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

interface IArgs {
  title: string | JSX.Element;
  isRightSideBar?: boolean;
}

export const useInit = ({ title, isRightSideBar }: IArgs) => {
  const { setTitle, activateRightSideBar }: IOutletContext = useOutletContext();

  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);

  useEffect(() => {
    activateRightSideBar(isRightSideBar);
  }, [activateRightSideBar, isRightSideBar]);
};
