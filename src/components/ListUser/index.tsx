import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import CardTec from "../Card";
import { Ul } from "./style";

const ListUser = () => {
  const { allUsers } = useContext(UserContext);
  // user?.techs?.sort((a, b) => a.id < b.id ? 1 : a.id > b.id? -1 : 0);
  return (
    <Ul>
      {allUsers?.map((elem) => (
        <CardTec key={elem.id} elem={elem} />
      ))}
    </Ul>
  );
};

export default ListUser;
