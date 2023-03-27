import styled from "styled-components";

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
  @media (min-width: 336px) {
    width: 94.5%;
  }
  @media (min-width: 350px) {
    width: 94.7%;
  }
  @media (min-width: 360px) {
    width: 95%;
  }
  @media (min-width: 400px) {
    width: 95.3%;
  }
`;
export const ModalRegsTitle = styled.h2`
  color: var(--grey-0);
`;
export const ModalRegsContBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
