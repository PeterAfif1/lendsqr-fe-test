import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.scss";
import { useState } from "react";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <div
        className={`dashboard-layout__sidebar ${sidebarOpen ? "dashboard-layout__sidebar--open" : ""}`}
      >
        <Sidebar />
      </div>
      {sidebarOpen && (
        <div
          className="dashboard-layout__overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className="Dashboard-layout__right">
        <Header onMenuClick={() => setSidebarOpen((prev) => !prev)} />
        <main className="dashboard-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
