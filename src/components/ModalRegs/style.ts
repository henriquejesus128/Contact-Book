import styled from "styled-components";
import { AddContactAdd } from "../AddContact/style";

export const Headered = styled.div`
  background-color: var(--grey-2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 0 1rem;
  border-radius: 5px 5px 0 0;
  @media (min-width: 335px) {
    width: 100%;
  }
`;

export const Close = styled(AddContactAdd)`
  border-radius: 50%;
  background-color: var(--negative);
  font-size: 1rem;
`;
