import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 448px;
  height: 300px;
  padding: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 101;
`;

export const IconContainer = styled.span`
  svg {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 12px;
`;

export const CreatedAt = styled.span`
  margin-right: 10px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  line-height: 1.5;
  word-wrap: break-word;
  word-break: break-all;
`;
