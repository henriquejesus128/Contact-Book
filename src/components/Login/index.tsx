import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { FormStyle } from "../../styles/Form/style";
import { InputStyle } from "../../styles/Input/style";
import { LabelStyle } from "../../styles/Label/style";
import { ButtonStyle } from "../../styles/Button/style";

const Login = () => {
  const { showPassword, setShowPassword } = useContext(AuthContext);
  return (
    <FormStyle>
      <h1>Login</h1>
      <LabelStyle htmlFor="email">Email</LabelStyle>
      <InputStyle type="email" id="email" placeholder="Digite aqui seu email" />
      <LabelStyle htmlFor="password">Senha</LabelStyle>
      <div className="password">
        <InputStyle
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
        />
        {showPassword === false ? (
          <FaEyeSlash onClick={() => setShowPassword(true)} />
        ) : (
          <FaEye onClick={() => setShowPassword(false)} />
        )}
      </div>
      <ButtonStyle type="submit">Entrar</ButtonStyle>
    </FormStyle>
  );
};
export default Login;
