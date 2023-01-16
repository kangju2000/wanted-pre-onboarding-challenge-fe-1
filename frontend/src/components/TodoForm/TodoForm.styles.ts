import styled from '@emotion/styled';

export const TodoForm = styled.form``;

export const TodoFormTitle = styled.h1`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.lightgray};
`;

export const TodoFormTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 8px;
  margin-bottom: 10px;
  font-family: inherit;
  resize: none;
`;
