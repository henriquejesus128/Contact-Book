import { useLocation } from "react-router-dom";
import Login from "../Login";
import { MainStyle } from "./style";

const Main = () => {
  let location = useLocation();
  return (
    <MainStyle>
      {location.pathname === `/register` ? (
        <h1>Regiter</h1>
      ) : location.pathname === `/dashboard` ? (
        <h1>DashBoard</h1>
      ) : (
        <Login />
      )}
    </MainStyle>
  );
};
export default Main;
