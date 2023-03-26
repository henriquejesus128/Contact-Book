import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { FormStyle } from "../../styles/Form/style";
import { InputStyle } from "../../styles/Input/style";
import { LabelStyle } from "../../styles/Label/style";
import { ButtonStyle } from "../../styles/Button/style";

const Signup = () => {
  const { showPassword, setShowPassword } = useContext(AuthContext);
  return (
    <FormStyle>
      <h1>Cadastrar</h1>
      <LabelStyle htmlFor="name">Nome</LabelStyle>
      <InputStyle type="text" id="name" placeholder="Digite aqui seu nome" />
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
      <LabelStyle htmlFor="photo">Foto</LabelStyle>
      <InputStyle
        type="text"
        id="photo"
        placeholder="Digite aqui seu a url da sua foto"
      />
      <LabelStyle htmlFor="phone">Telefone</LabelStyle>
      <InputStyle
        type="tel"
        id="phone"
        pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
        placeholder="Digite aqui seu Telefone de contato"
      />
      <ButtonStyle type="submit">Entrar</ButtonStyle>
    </FormStyle>
  );
};
export default Signup;
