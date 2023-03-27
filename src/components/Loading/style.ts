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
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  z-index: 1;
`;

export const LoadingText = styled.h1`
  font-size: 3rem;
  color: var(--grey-0);
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
