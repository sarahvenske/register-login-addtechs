import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import UserRegister from "../pages/UserRegister";
import Dashboard from "../pages/Dashboard"

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<UserRegister />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
}

export default MainRoutes;
