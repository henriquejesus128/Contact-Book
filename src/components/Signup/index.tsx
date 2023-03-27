import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { FormStyle } from "../../styles/Form/style";
import { InputStyle } from "../../styles/Input/style";
import { LabelStyle } from "../../styles/Label/style";
import { ButtonStyle } from "../../styles/Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/registerSchema";
import { IReqRegister } from "../../interface";

const Signup = () => {
  const { showPassword, setShowPassword, registed } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReqRegister>({ resolver: yupResolver(registerSchema) });

  return (
    <FormStyle onSubmit={handleSubmit(registed)}>
      <h1>Cadastrar</h1>
      <LabelStyle htmlFor="name">Nome</LabelStyle>
      <InputStyle
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        {...register(`name`)}
      />
      <span>{errors.name?.message}</span>
      <LabelStyle htmlFor="email">Email</LabelStyle>
      <InputStyle
        type="email"
        id="email"
        placeholder="Digite aqui seu email"
        {...register(`email`)}
      />
      <span>{errors.email?.message}</span>
      <LabelStyle htmlFor="password">Senha</LabelStyle>
      <div className="password">
        <InputStyle
          type={showPassword === false ? "password" : "text"}
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
      <span>{errors.password?.message}</span>
      <LabelStyle htmlFor="photo">Foto</LabelStyle>
      <InputStyle
        type="text"
        id="photo"
        placeholder="Digite aqui seu a url da sua foto"
        {...register(`photo`)}
      />
      <span>{errors.photo?.message}</span>
      <LabelStyle htmlFor="phone">Telefone</LabelStyle>
      <InputStyle
        type="tel"
        id="phone"
        pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
        placeholder="Digite aqui seu Telefone de contato"
        {...register(`phone`)}
      />
      <span>{errors.phone?.message}</span>
      <ButtonStyle type="submit">Entrar</ButtonStyle>
    </FormStyle>
  );
};
export default Signup;
