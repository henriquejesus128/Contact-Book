import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { IContactProps } from "../../interface";
import { Headline, Title, CardShow, Li } from "./style";
import img from "../../assets/image.png";

const Card = ({ elem }: IContactProps) => {
  const { setTec, setModalEdit } = useContext(ContactContext);
  return (
    <Li id={elem.id}>
      <img src={elem.photo ? elem.phone : img} alt={elem.name} />
      <Title>{elem.name}</Title>
      <Headline>{elem.email}</Headline>
      <Headline>{elem.phone}</Headline>
      <CardShow onClick={() => [setModalEdit(true), setTec(elem)]}>
        Abrir
      </CardShow>
    </Li>
  );
};

export default Card;
