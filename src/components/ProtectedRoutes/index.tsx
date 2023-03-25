import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UserProvider from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const { token } = useContext(AuthContext);
  return token ? (
    <UserProvider>
      <Outlet />
    </UserProvider>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;