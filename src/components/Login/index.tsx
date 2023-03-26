import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { FormStyle } from "../../styles/Form/style";
import { InputStyle } from "../../styles/Input/style";
import { LabelStyle } from "../../styles/Label/style";
import { ButtonStyle } from "../../styles/Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sessionSchema } from "../../schemas/sessionSchema";

const Login = () => {
  const { showPassword, setShowPassword, session } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(sessionSchema) });
  return (
    <FormStyle onSubmit={handleSubmit(session)}>
      <h1>Login</h1>
      <LabelStyle htmlFor="email">Email</LabelStyle>
      <InputStyle
        type="email"
        id="email"
        placeholder="Digite aqui seu email"
        {...register(`email`)}
      />
      {/* <span>{errors.email?message}</span> */}
      <LabelStyle htmlFor="password">Senha</LabelStyle>
      <div className="password">
        <InputStyle
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register(`password`)}
        />
        {showPassword === false ? (
          <FaEyeSlash onClick={() => setShowPassword(true)} />
        ) : (
          <FaEye onClick={() => setShowPassword(false)} />
        )}
      </div>
      {/* <span>{errors.password?message}</span> */}
      <ButtonStyle type="submit">Entrar</ButtonStyle>
    </FormStyle>
  );
};
export default Login;
