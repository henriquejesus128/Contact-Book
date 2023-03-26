import { useLocation } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import { MainStyle } from "./style";

const Main = () => {
  let location = useLocation();
  return (
    <MainStyle>
      {location.pathname === `/register` ? (
        <Signup />
      ) : location.pathname === `/dashboard` ? (
        <h1>DashBoard</h1>
      ) : (
        <Login />
      )}
    </MainStyle>
  );
};
export default Main;
