import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <MainStyle>
      <Outlet />
    </MainStyle>
  );
};
export default Main;
