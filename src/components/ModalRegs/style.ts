import styled from "styled-components";
import { AddContactAdd } from "../AddContact/style";

export const ModalRegsHeader = styled.div`
  background-color: var(--grey-2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 94.3%;
  padding: 0 1rem;
  margin-top: -2.1rem;
  margin-left: -8px;
  border-radius: 5px 5px 0 0;
  @media (min-width: 335px) {
    width: 95.5%;
  }
`;
export const ModalRegsTitle = styled.h2`
  color: var(--grey-0);
`;
export const ModalRegsClose = styled(AddContactAdd)`
  border-radius: 50%;
  background-color: var(--negative);
  font-size: 1rem;
`;
