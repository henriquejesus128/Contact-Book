import { ButtonStyle } from "../../styles/Button/style";
import { FormStyle } from "../../styles/Form/style";
import { ModalRegsContBtn } from "./style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LabelStyle } from "../../styles/Label/style";
import { Close, Headered } from "../ModalRegs/style";
import { updateContactSchema } from "../../schemas/updateSchema";
import { ContactContext } from "../../contexts/ContactContext";
import { IPatchContact } from "../../interface";
import { InputStyle } from "../../styles/Input/style";
import { Title } from "../CardContact/style";

export interface ITechStatus {
  status: string;
}

const ModalEditContact = () => {
  const { patchContact, deleteContact, setModalEdit, contact } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPatchContact>({
    resolver: yupResolver(updateContactSchema),
  });

  const onSubmit = (data: IPatchContact) => patchContact(data, contact.id);

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <Headered>
        <Title>Editar/Deletar Contato</Title>
        <Close onClick={(e: any) => [e.preventDefault(), setModalEdit(false)]}>
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
        placeholder="Digite aqui seu Telefone de contato"
        {...register(`phone`)}
      />
      <span>{errors.phone?.message}</span>
      <ModalRegsContBtn>
        <ButtonStyle type="submit">Salvar alterações</ButtonStyle>
        <ButtonStyle
          onClick={(e) => [
            e.preventDefault(),
            deleteContact(contact.id),
            setModalEdit(false),
          ]}
        >
          Excluir
        </ButtonStyle>
      </ModalRegsContBtn>
    </FormStyle>
  );
};

export default ModalEditContact;
