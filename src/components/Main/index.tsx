import { Outlet } from "react-router-dom";
import Login from "../Login";
import { MainStyle } from "./style";

const Main = () => {
  return (
    <MainStyle>
      <Login />
    </MainStyle>
  );
};
export default Main;
