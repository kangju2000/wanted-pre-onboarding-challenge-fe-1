import styled from '@emotion/styled';

export const TodoBox = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 10px;
  min-height: 60px;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  svg {
    min-width: 24px;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      filter: brightness(1.1);
    }
    path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export const TodoTitle = styled.p`
  width: 100%;
  line-height: 1.3;
  word-wrap: break-word;
  word-break: break-all;
`;
