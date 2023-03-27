import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ContactProvider from "../../contexts/ContactContext";
import UserProvider from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const { token } = useContext(AuthContext);
  return token ? (
    <UserProvider>
      <ContactProvider>
        <Outlet />
      </ContactProvider>
    </UserProvider>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;
