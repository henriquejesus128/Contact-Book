import { Link, useLocation } from "react-router-dom";
import { HeaderStyle, StyleLogo } from "./style";

const Header = () => {
  let location = useLocation();
  return (
    <HeaderStyle>
      <StyleLogo>Contact Book</StyleLogo>
      {location.pathname === `/register` ? (
        <Link to="/">Login</Link>
      ) : location.pathname === `/dashboard` ? (
        <Link to="/" onClick={() => localStorage.clear()}>
          Sair
        </Link>
      ) : (
        <Link to="/register">Cadastrar</Link>
      )}
    </HeaderStyle>
  );
};
export default Header;
