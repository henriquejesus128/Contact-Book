import styled from "styled-components";

export const Li = styled.li`
  background-color: var(--grey-4);
  width: 150px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
  border-radius: 4px;
  img {
    width: 100%;
    height: 140px;
  }
`;
export const Title = styled.h2`
  color: var(--grey-0);
  text-overflow: ellipsis;
`;
export const Headline = styled.p`
  color: var(--grey-1);
  text-overflow: ellipsis;
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
