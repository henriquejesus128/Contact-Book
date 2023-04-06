import { ButtonStyle } from "../../styles/Button/style";
import { FormStyle } from "../../styles/Form/style";
import { InputStyle } from "../../styles/Input/style";
import { Close, Headered } from "./style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LabelStyle } from "../../styles/Label/style";
import { IContact } from "../../interface";
import { contactSchema } from "../../schemas/contactSchema";
import { ContactContext } from "../../contexts/ContactContext";
import { Title } from "../CardContact/style";

const ModalRegs = () => {
  const { createContact, setModalCreat } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(contactSchema),
  });

  return (
    <FormStyle onSubmit={handleSubmit(createContact)}>
      <Headered>
        <Title>Cadastrar Contato</Title>
        <Close onClick={(e: any) => [e.preventDefault(), setModalCreat(false)]}>
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
        placeholder="Ex: 00-00000-0000"
        {...register(`phone`)}
      />
      <span>{errors.phone?.message}</span>
      <ButtonStyle type="submit">Cadastrar Tecnologia</ButtonStyle>
    </FormStyle>
  );
};

export default ModalRegs;
