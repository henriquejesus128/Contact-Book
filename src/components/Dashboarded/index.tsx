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

const Dashboarded = () => {
  const { allcontact, modalEdit, setModalEdit } = useContext(ContactContext);
  const { allUsers } = useContext(UserContext);
  const { user } = useContext(AuthContext);
  return (
    <ContainerDash onClick={() => [setModalEdit(true)]}>
      {modalEdit && (
        <ModalContainer>
          <ModalEditContact />
        </ModalContainer>
      )}
      <DashSection>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <img src={user.photo ? user.photo : img} alt={user.name} />
      </DashSection>
      <DashContDiv>
        <AddContact />
        {allcontact?.length !== 0 ? <ListContact /> : <CouldNotFind />}
        <AddContactTitle>USUARIOS</AddContactTitle>
        {allUsers?.length !== 0 ? <ListUser /> : <CouldNotFind />}
      </DashContDiv>
    </ContainerDash>
  );
};
export default Dashboarded;
