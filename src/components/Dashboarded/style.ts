import styled from "styled-components";

export const ContainerDash = styled.div`
  width: 90%;
  max-width: 780px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DashSection = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 150px;
  border-bottom: 1px solid var(--grey-1);
  border-top: 1px solid var(--grey-1);
  h1 {
    height: 100%;
    color: var(--grey-0);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  p {
    height: 100%;
    color: var(--grey-0);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  img {
  }
`;
export const DashContDiv = styled.div`
  width: 100%;
`;
