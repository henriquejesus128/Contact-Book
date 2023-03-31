import { ButtonStyle } from "../../styles/Button/style";
import { FormStyle } from "../../styles/Form/style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LabelStyle } from "../../styles/Label/style";
import { Close, Headered } from "../ModalRegs/style";
import { updateContactSchema } from "../../schemas/updateSchema";
import { IPatchUser } from "../../interface";
import { InputStyle } from "../../styles/Input/style";
import { Title } from "../CardContact/style";
import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ModalRegsContBtn } from "../ModalEditContact/style";

const ModalEditUser = () => {
  const { patchUser, deleteUser, setModalEditUser } = useContext(UserContext);
  const { showPassword, setShowPassword } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPatchUser>({
    resolver: yupResolver(updateContactSchema),
  });

  return (
    <FormStyle onSubmit={handleSubmit(patchUser)}>
      <Headered>
        <Title>Editar/Deletar User</Title>
        <Close
          onClick={(e: any) => [e.preventDefault(), setModalEditUser(false)]}
        >
          x
        </Close>
      </Headered>
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
      <ModalRegsContBtn>
        <ButtonStyle type="submit">Salvar alterações</ButtonStyle>
        <ButtonStyle
          onClick={(e) => [
            e.preventDefault(),
            deleteUser(),
            setModalEditUser(false),
          ]}
        >
          Excluir
        </ButtonStyle>
      </ModalRegsContBtn>
    </FormStyle>
  );
};

export default ModalEditUser;
