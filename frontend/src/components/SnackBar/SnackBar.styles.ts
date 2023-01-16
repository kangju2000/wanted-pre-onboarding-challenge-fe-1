import styled from '@emotion/styled';

export const SnackBar = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 50px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  z-index: 200;
  animation: fadein 0.5s, fadeout 0.5s 1.7s;

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 20px;
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 20px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;
