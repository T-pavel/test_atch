import { IOutletContext, PageKeyEnum } from "@src/types";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

interface IArgs {
  pageKey: PageKeyEnum;
  isRightSideBar?: boolean;
}

export const useLayoutChange = ({ pageKey, isRightSideBar }: IArgs) => {
  const { setChildren, activateRightSideBar }: IOutletContext = useOutletContext();

  useEffect(() => {
    setChildren(pageKey);
  }, [setChildren, pageKey]);

  useEffect(() => {
    activateRightSideBar(isRightSideBar);
  }, [activateRightSideBar, isRightSideBar]);
};
