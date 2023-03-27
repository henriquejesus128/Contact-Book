import styled from "styled-components";

export const ContainerDash = styled.div`
  width: 90%;
  max-width: 780px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const DashSection = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 150px;
  border-bottom: 1px solid var(--grey-1);
  border-top: 1px solid var(--grey-1);
  div {
    width: 150px;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 1rem;
    h1 {
      height: 15%;
      color: var(--grey-0);
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    p {
      height: 15%;
      color: var(--grey-0);
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    button {
      width: 40%;
      height: 20px;
      padding: 0;
    }
  }

  img {
    width: 120px;
    height: 140px;
    margin-left: 1rem;
  }
`;
export const DashContDiv = styled.div`
  width: 100%;
`;
