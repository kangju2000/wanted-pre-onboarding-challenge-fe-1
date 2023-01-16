import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 448px;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: inherit;
  button {
    min-width: 80px;
  }
`;

export const Title = styled.h1`
  cursor: pointer;
`;
