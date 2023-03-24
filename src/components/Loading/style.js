import styled, { keyframes } from "styled-components";

const running = keyframes`
0%{
    transform: rotate(0)
}
100%{
    transform: rotate(360deg)
}
`;

export const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--grey-4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  display: flex;
`;

export const LoadingIcon = styled.div`
  height: 150px;
  width: 150px;

  border-radius: 50%;
  border: 12px solid var(--grey-0);
  border-left: 12px solid var(--color-primary);

  animation-name: ${running};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
