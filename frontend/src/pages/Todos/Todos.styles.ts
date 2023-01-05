import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Todos = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const TodoList = styled.div`
  height: 85%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const TodoAddButton = styled.div<{ isAdding: boolean }>`
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 50%;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  :hover {
    filter: brightness(1.1);
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  svg {
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
  transition: all 0.4s ease-in-out;
  ${({ isAdding }) =>
    isAdding &&
    css`
      transform: translate(-50%, -50%) rotate(45deg);
    `}
`;

export const TodoForm = styled.form<{ isOpen: boolean }>`
  position: absolute;
  bottom: ${({ isOpen }) => (isOpen ? '100px' : '-270px')};
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 15px;
  transition: bottom 0.5s ease-in-out;

  input {
    margin-bottom: 10px;
  }
  button {
    margin-right: 10px;
  }
`;

export const TodoFormTitle = styled.h1`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
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
