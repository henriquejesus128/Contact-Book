import styled from "styled-components";

export const Ul = styled.ul`
  background-color: var(--grey-2);
  border-radius: 4px;
  height: max-content;
  max-height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  overflow: auto;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    display: hidden;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: var(--grey-4);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--grey-4);
  }
`;
