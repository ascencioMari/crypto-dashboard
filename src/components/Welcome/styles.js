import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-width: 300px;
  border: 0 none;
  border-radius: 0.5rem;
  box-shadow: -1rem -1rem 1rem #fff, 1rem 1rem 1rem #f1f1f1;
  padding: 2rem;
  box-sizing: border-box;

  h1 {
    margin: 0 0 2rem;
    color: var(--primary);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 1rem;
    }

    label,
    input,
    button {
      width: 100%;
      display: inline-block;
      box-sizing: border-box;
    }

    label {
      margin-bottom: 0.5rem;
    }
  }
`;
