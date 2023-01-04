import styled from '@emotion/styled';

export const Todos = styled.div`
  position: relative;
  height: 100%;
`;

export const TodoList = styled.div`
  height: 70%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const TodoAddButton = styled.div`
  position: absolute;
  display: flex;
  bottom: -10px;
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
`;
