import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.scss";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="Dashboard-layout__right">
        <Header />
        <main className="dashboard-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
