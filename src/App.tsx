import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
import { AuthContext } from "./contexts/AuthContext";
import Routed from "./routes";

const App = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading && <Loading />}
      <ToastContainer />
      <Routed />
    </>
  );
};

export default App;
