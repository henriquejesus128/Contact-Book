import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { ModalContainer } from "../../styles/Container/style";
import ModalRegs from "../ModalRegs";
import { AddContactAdd, AddContactStyle, AddContactTitle } from "./style";

const AddContact = () => {
  const { modalCreat, setModalCreat } = useContext(ContactContext);

  return (
    <>
      {modalCreat && (
        <ModalContainer>
          <ModalRegs />
        </ModalContainer>
      )}
      <AddContactStyle>
        <AddContactTitle>CONTATOS</AddContactTitle>
        <AddContactAdd onClick={() => setModalCreat(true)}>+</AddContactAdd>
      </AddContactStyle>
    </>
  );
};

export default AddContact;
