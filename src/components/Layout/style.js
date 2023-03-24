import styled from "styled-components";

export const MainStyle = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2rem 0;
`;

export const HeaderStyle = styled.header`
  width: 100%;
  height: 100%;
  min-height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  a {
    height: 38.5px;
    max-width: 100%;

    border-radius: 5px;
    padding: 0px 22px;

    background-color: var(--color-primary);

    color: var(--grey-0);

    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const HeaderLogo = styled.img`
  width: 170px;
  height: 25px;
`;
