import styled from "styled-components";

export const FormStyle = styled.form`
  height: max-content;
  width: 90%;
  max-width: 370px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  border-radius: 5px;
  padding: 34px 0.5rem;

  margin-right: 0;

  margin-bottom: 2rem;

  background-color: var(--grey-3);

  h1 {
    color: var(--grey-0);
    font-size: 1.5rem;
    font-weight: bolder;
    letter-spacing: 5px;
    text-align: center;
  }
  .password {
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: var(--grey-2);

    border-radius: 5px;

    border: 1px solid transparent;

    :focus {
      border: 1px solid var(--grey-0);
    }

    input {
      width: 100%;
      border: none;
    }
    svg {
      height: 100%;
      width: 20px;

      margin-left: 5px;
      margin-right: 5px;

      color: var(--grey-0);

      cursor: pointer;
    }
  }
`;
