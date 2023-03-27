import styled from "styled-components";

export const Li = styled.li`
  background-color: var(--grey-4);
  width: 90%;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
  border-radius: 4px;
`;
export const Title = styled.h2`
  max-width: 100px;
  color: var(--grey-0);
  margin-left: 1rem;
  text-overflow: ellipsis;
`;
export const Headline = styled.p`
  color: var(--grey-1);
`;

export const CardShow = styled.button`
  display: flex;
  align-items: center;
  color: var(--grey-0);
  font-size: 0.9rem;
  background-color: var(--grey-3);
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 5px;
  margin-right: 1rem;
  cursor: pointer;
`;
