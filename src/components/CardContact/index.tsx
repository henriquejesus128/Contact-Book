import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { IContactProps } from "../../interface";
import { Headline, Title, CardShow, Li } from "./style";
import img from "../../assets/image.png";

const CardContact = ({ elem }: IContactProps) => {
  const { setContact, setModalEdit } = useContext(ContactContext);
  return (
    <Li id={elem.id}>
      <img src={elem.photo ? elem.photo : img} alt={elem.name} />
      <Title>{elem.name}</Title>
      <Headline>{elem.email}</Headline>
      <Headline>{elem.phone}</Headline>
      <CardShow onClick={() => [setModalEdit(true), setContact(elem)]}>
        Abrir
      </CardShow>
    </Li>
  );
};

export default CardContact;
