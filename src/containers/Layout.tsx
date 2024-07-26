import { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles.css";

export const Layout = () => {
  const [stateChildren, setChildren] = useState<ReactNode>("Title");
  const [stateShowRightSideBar, setStateShowRightSideBar] =
    useState<boolean>(false);
  return (
    <div className="layout">
      <aside className="left-sidebar">{stateChildren}</aside>
      <main className="content">
        <Outlet
          context={{
            activateRightSideBar: setStateShowRightSideBar,
            setChildren
          }}
        />
      </main>
      {stateShowRightSideBar && (
        <aside className="right-sidebar">Right Sidebar</aside>
      )}
    </div>
  );
};
