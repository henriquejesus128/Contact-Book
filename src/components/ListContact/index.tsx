import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { ModalContainer } from "../../styles/Container/style";
import CardTec from "../Card";
import { Ul } from "../ListUser/style";
import ModalEdit from "../ModalEdit";

const ListContact = () => {
  const { allcontact } = useContext(ContactContext);
  const { modalEdit } = useContext(ContactContext);
  // user?.techs?.sort((a, b) => a.id < b.id ? 1 : a.id > b.id? -1 : 0);
  return (
    <Ul>
      {modalEdit && (
        <ModalContainer>
          <ModalEdit />
        </ModalContainer>
      )}
      {allcontact?.map((elem) => (
        <CardTec key={elem.id} elem={elem} />
      ))}
    </Ul>
  );
};

export default ListContact;
