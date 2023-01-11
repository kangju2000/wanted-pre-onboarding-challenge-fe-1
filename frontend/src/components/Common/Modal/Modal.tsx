import * as S from './Modal.styles';

export interface ModalProps {
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClick, children }: ModalProps) => {
  return (
    <S.ModalWrapper isOpen={isOpen} onClick={onClick}>
      <S.ModalContainer>{children}</S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default Modal;
