import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
import { AuthProvider } from "./contexts/AuthContext";
import Routed from "./routes";

const App = () => {
  const { loading } = useContext(AuthProvider);
  return (
    <>
      {loading && <Loading />}
      <ToastContainer />
      <Routed />
    </>
  );
};

export default App;
