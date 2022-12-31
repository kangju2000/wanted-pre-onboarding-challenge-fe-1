import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Content = styled.div`
  max-width: 448px;
  height: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightgray};
`;
