import { Route, Routes } from "react-router-dom";
// import ProtectedRoutes from "../components/ProtectedRoutes";
// import Dashboard from "../pages/Dashboard";
import Login from "../pages/Session";
import NotFoundPage from "../pages/NotFoundPage";
// import Register from "../pages/Register";

const Routed = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    {/* <Route path="/register" element={<Register />} />
    <Route element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route> */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
export default Routed;
