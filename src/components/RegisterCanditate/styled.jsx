import styled from "styled-components";

export const InputForms = styled.input`
  width: 100%;
  height: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ::placeholder {
    color: #999;
  }

  :hover {
    background-color: #ebebeb;
  }

  :focus {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
