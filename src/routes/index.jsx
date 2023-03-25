import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";

const Routed = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/loading" element={<Loading />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
export default Routed;
