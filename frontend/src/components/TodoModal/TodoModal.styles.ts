import styled from '@emotion/styled';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

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
