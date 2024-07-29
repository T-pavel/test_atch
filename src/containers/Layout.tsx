import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles.css";
import { PageKeyEnum } from "@src/types";
import { SideBar } from "./SideBar";

export const Layout = () => {
  const [pageKey, setChildren] = useState<PageKeyEnum>(PageKeyEnum.OneStep);
  const [stateShowRightSideBar, setStateShowRightSideBar] =
    useState<boolean>(false);
  
  return (
    <div className="layout">
      <SideBar pageKey={pageKey} />
      <main className="content">
        <Outlet
          context={{
            activateRightSideBar: setStateShowRightSideBar,
            setChildren,
          }}
        />
      </main>
      {stateShowRightSideBar && (
        <aside className="right-sidebar">Right Sidebar</aside>
      )}
    </div>
  );
};
