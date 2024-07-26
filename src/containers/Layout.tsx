import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles.css";

export const Layout = () => {
  const [stateTitle, setStateTitle] = useState<string>("Title");
  const [stateShowRightSideBar, setStateShowRightSideBar] =
    useState<boolean>(false);
  return (
    <div className="layout">
      <aside className="left-sidebar">{stateTitle}</aside>
      <main className="content">
        <Outlet
          context={{
            setTitle: setStateTitle,
            activateRightSideBar: setStateShowRightSideBar,
          }}
        />
      </main>
      {stateShowRightSideBar && (
        <aside className="right-sidebar">Right Sidebar</aside>
      )}
    </div>
  );
};
