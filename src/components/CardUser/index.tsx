import { IUserProps } from "../../interface";
import img from "../../assets/image.png";
import { Headline, Li, Title } from "../CardContact/style";

const CardUser = ({ elem }: IUserProps) => {
  return (
    <Li id={elem.id}>
      <img src={elem.photo ? elem.photo : img} alt={elem.name} />
      <Title>{elem.name}</Title>
      <Headline>{elem.email}</Headline>
      <Headline>{elem.phone}</Headline>
      <Headline>{elem.isActive}</Headline>
    </Li>
  );
};

export default CardUser;
