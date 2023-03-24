import { Link } from "react-router-dom";
import styled from "styled-components";

export const FourHundredFour = styled.h1`
  font-size: 10rem;
  color: var(--negative);
`;
export const NotFound = styled.p`
  font-size: 2rem;
  color: var(--grey-1);
`;

export const LinkStyle = styled(Link)`
  height: 38.5px;
  width: 150px;

  border-radius: 5px;

  background-color: var(--color-primary);

  color: var(--grey-0);

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3rem;
`;
