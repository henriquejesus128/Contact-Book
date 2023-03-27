import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { IContactProps } from "../../interface";
import { CardTecHeadline, CardTecLi, CardTecShow, CardTecTitle } from "./style";
import img from "../../assets/image.png";

const Card = ({ elem }: IContactProps) => {
  const { setTec, setModalEdit } = useContext(ContactContext);
  return (
    <CardTecLi id={elem.id}>
      <img src={elem.photo ? elem.phone : img} alt={elem.name} />
      <CardTecTitle>{elem.name}</CardTecTitle>
      <CardTecHeadline>{elem.email}</CardTecHeadline>
      <CardTecHeadline>{elem.phone}</CardTecHeadline>
      <CardTecShow onClick={() => [setModalEdit(true), setTec(elem)]}>
        Abrir
      </CardTecShow>
    </CardTecLi>
  );
};

export default Card;
