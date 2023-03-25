import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: space-around;
  align-items: center;

  a {
    height: 38.5px;
    max-width: 100%;

    border-radius: 5px;
    padding: 0px 14px;

    background-color: var(--color-primary);

    color: var(--grey-0);

    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyleLogo = styled.h1`
  color: var(--grey-0);
  font-size: 2rem;
  font-style: oblique;
  font-weight: bolder;
  text-decoration: underline;
  text-decoration-color: var(--grey-0);
  letter-spacing: 1px;
  word-spacing: 2px;
`;
