import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { IUserProps } from "../../interface";
import img from "../../assets/image.png";
import { CardShow, Headline, Li, Title } from "../CardContact/style";

const CardUser = ({ elem }: IUserProps) => {
  const { setContact, setModalEdit } = useContext(ContactContext);
  return (
    <Li id={elem.id}>
      <img src={elem.photo ? elem.photo : img} alt={elem.name} />
      <Title>{elem.name}</Title>
      <Headline>{elem.email}</Headline>
      <Headline>{elem.phone}</Headline>
      <Headline>{elem.isActive}</Headline>
      <CardShow onClick={() => [setModalEdit(true), setContact(elem)]}>
        Abrir
      </CardShow>
    </Li>
  );
};

export default CardUser;
