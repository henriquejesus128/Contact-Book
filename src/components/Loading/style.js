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
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

export const LoadingIcon = styled.div`
  height: 100px;
  width: 100px;

  border-radius: 50%;
  border: 8px solid white;
  border-left: 8px solid red;

  animation-name: ${running};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
