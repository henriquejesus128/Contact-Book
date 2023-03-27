import { ContactContext } from "../../contexts/ContactContext";
import AddContact from "../AddContact";
import { ContainerDash, DashContDiv, DashSection } from "./style";
import { useContext } from "react";
import CouldNotFind from "../CouldNotFind";
import { UserContext } from "../../contexts/UserContext";
import ListUser from "../ListUser";
import ListContact from "../ListContact";
import { AddContactTitle } from "../AddContact/style";
import { ModalContainer } from "../../styles/Container/style";
import { AuthContext } from "../../contexts/AuthContext";
import img from "../../assets/image.png";
import ModalEditUser from "../ModalEditUser";
import { ButtonStyle } from "../../styles/Button/style";

const Dashboarded = () => {
  const { allContact, setModalEdit } = useContext(ContactContext);
  const { allUsers, modalEditUser } = useContext(UserContext);
  const { user } = useContext(AuthContext);
  console.log(allUsers);

  return (
    <ContainerDash>
      {modalEditUser && (
        <ModalContainer>
          <ModalEditUser />
        </ModalContainer>
      )}
      <DashSection>
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <ButtonStyle onClick={() => [setModalEdit(true)]}>Editar</ButtonStyle>
        </div>
        <img src={user.photo ? user.photo : img} alt={user.name} />
      </DashSection>
      <DashContDiv>
        <AddContact />
        {allContact?.length !== 0 ? <ListContact /> : <CouldNotFind />}
        <AddContactTitle>USUARIOS</AddContactTitle>
        {allUsers?.length !== 0 ? <ListUser /> : <CouldNotFind />}
      </DashContDiv>
    </ContainerDash>
  );
};
export default Dashboarded;
