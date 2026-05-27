import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/index";
import Dashboard from "./pages/Dashboard/index.tsx";
import DashboardLayout from "./components/layout/DashboardLayout";
import Users from "./pages/Users/index";
import UserDetails from "./pages/UserDetails/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
