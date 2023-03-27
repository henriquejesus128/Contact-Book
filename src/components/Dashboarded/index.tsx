import { ContactContext } from "../../contexts/ContactContext";
import AddContact from "../AddContact";
import { ContainerDash, DashContDiv, DashSection } from "./style";
import { useContext } from "react";
import CouldNotFind from "../CouldNotFind";
import { UserContext } from "../../contexts/UserContext";
import ListUser from "../ListUser";
import ListContact from "../ListContact";
import { AddContactTitle } from "../AddContact/style";

const Dashboarded = () => {
  const { allcontact } = useContext(ContactContext);
  const { allUsers } = useContext(UserContext);
  return (
    <ContainerDash>
      <DashSection>
        <h1>Henrique</h1>
        <p>Email</p>
        <img src="" alt="" />
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
