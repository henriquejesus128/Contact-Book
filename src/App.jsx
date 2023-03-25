// import Loading from "./components/Loading";
// import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routed from "./routes";

const App = () => {
  // const { loading } = useContext();
  return (
    <>
      {/* {loading && <Loading />} */}
      <ToastContainer />
      <Routed />
    </>
  );
};

export default App;
