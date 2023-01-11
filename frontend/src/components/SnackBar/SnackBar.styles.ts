import styled from '@emotion/styled';

export const SnackBar = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 50px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  z-index: 200;
`;
