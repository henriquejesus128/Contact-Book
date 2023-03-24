import { Link, Outlet, useLocation } from "react-router-dom";
import {
  ContainerDash,
  ContainerLogin,
  ContainerSignup,
} from "../../styles/Container/style";
import { HeaderLogo, HeaderStyle, MainStyle } from "./style";

const Layout = () => {
  let location = useLocation();
  return (
    <>
      <HeaderStyle>
        {location.pathname === `/signup` ? (
          <ContainerSignup>
            <HeaderLogo src={logo} alt="logo" />
            <Link to="/">Volta</Link>
          </ContainerSignup>
        ) : location.pathname === `/dashboard` ? (
          <ContainerDash>
            <HeaderLogo src={logo} alt="logo" />
            <Link to="/" onClick={() => localStorage.clear()}>
              Sair
            </Link>
          </ContainerDash>
        ) : (
          <ContainerLogin>
            <HeaderLogo src={logo} alt="logo" />
          </ContainerLogin>
        )}
      </HeaderStyle>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </>
  );
};

export default Layout;
